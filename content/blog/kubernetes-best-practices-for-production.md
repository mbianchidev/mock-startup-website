---
title: "Kubernetes Best Practices for Production"
date: "2024-03-05"
author: "Matthew White"
category: "Kubernetes"
excerpt: "Essential tips and patterns for running Kubernetes workloads in production environments with confidence and reliability."
---

# Kubernetes Best Practices for Production

Running Kubernetes in production requires careful planning and adherence to best practices. This guide covers the essential patterns and practices for production-ready Kubernetes deployments.

## Resource Management

### Define Resource Requests and Limits

Always set resource requests and limits for your containers:

```yaml
resources:
  requests:
    memory: "128Mi"
    cpu: "100m"
  limits:
    memory: "256Mi"
    cpu: "200m"
```

**Why?**
- Requests ensure your pods get scheduled on nodes with sufficient resources
- Limits prevent runaway containers from consuming all node resources

### Use Namespaces for Isolation

Organize your workloads using namespaces:

```bash
kubectl create namespace production
kubectl create namespace staging
kubectl create namespace development
```

Benefits:
- Resource isolation
- Access control
- Resource quota management

## High Availability

### Pod Disruption Budgets

Protect critical workloads during voluntary disruptions:

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: my-app-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: my-app
```

### Multiple Replicas

Always run multiple replicas of critical services:

```yaml
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
```

## Security Best Practices

### 1. Use RBAC Effectively

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: production
  name: pod-reader
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list"]
```

### 2. Network Policies

Implement network segmentation:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: api-allow
spec:
  podSelector:
    matchLabels:
      app: api
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
```

### 3. Security Contexts

Run containers with minimal privileges:

```yaml
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  allowPrivilegeEscalation: false
  capabilities:
    drop:
      - ALL
```

## Monitoring and Observability

### Health Checks

Implement proper health checks:

```yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10

readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
```

### Logging

- Use structured logging (JSON format)
- Aggregate logs centrally (ELK, Loki, etc.)
- Include correlation IDs for tracing

### Metrics

Expose Prometheus metrics:

```go
http.Handle("/metrics", promhttp.Handler())
```

## Configuration Management

### Use ConfigMaps and Secrets

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  API_URL: "https://api.example.com"
  LOG_LEVEL: "info"
---
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  DB_PASSWORD: <base64-encoded-password>
```

### External Secrets Management

Consider using external secret managers:
- **AWS Secrets Manager**
- **HashiCorp Vault**
- **Azure Key Vault**

## Deployment Strategies

### Blue-Green Deployments

Maintain two identical environments:

```bash
# Switch traffic to green
kubectl patch service my-app -p '{"spec":{"selector":{"version":"green"}}}'
```

### Canary Deployments

Gradually roll out changes:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app
spec:
  selector:
    app: my-app
    # No version label - serves both versions
```

## Backup and Disaster Recovery

1. **Backup etcd regularly**
2. **Use Velero for cluster backups**
3. **Test your restore procedures**
4. **Document your disaster recovery plan**

### Example Velero Backup

```bash
velero backup create my-backup \
  --include-namespaces production \
  --ttl 720h
```

## Performance Optimization

### Horizontal Pod Autoscaling

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

## Checklist for Production

- [ ] Resource requests and limits defined
- [ ] Health checks configured
- [ ] Multiple replicas running
- [ ] RBAC policies in place
- [ ] Network policies configured
- [ ] Secrets managed securely
- [ ] Monitoring and alerting setup
- [ ] Backup strategy implemented
- [ ] Documentation complete
- [ ] Disaster recovery tested

## Conclusion

Running Kubernetes in production requires diligence and adherence to best practices. By following these guidelines, you can ensure your clusters are secure, reliable, and performant.

Remember: **Production is not the time to experiment**. Test thoroughly in staging environments that mirror production as closely as possible.
