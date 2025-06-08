import Image from 'next/image'

interface KubernetesDistro {
  name: string
  description: string
  logo: string
}

const kubernetesDistros: KubernetesDistro[] = [
  {
    name: 'GKE',
    description: 'Google Kubernetes Engine',
    logo: 'https://googlecloudplatform.github.io/kubeflow-gke-docs/docs/images/logos/gke.png'
  },
  {
    name: 'EKS',
    description: 'Amazon Elastic Kubernetes Service',
    logo: 'https://github.com/aws/eks-distro/blob/main/docs/theme/assets/images/logo.png?raw=true'
  },
  {
    name: 'AKS',
    description: 'Azure Kubernetes Service',
    logo: 'https://github.com/Azure/AKS/blob/master/blog/assets/images/400x400.png?raw=true'
  },
  {
    name: 'k3s',
    description: 'Lightweight Kubernetes',
    logo: 'https://raw.githubusercontent.com/cncf/artwork/master/projects/k3s/icon/color/k3s-icon-color.svg'
  },
  {
    name: 'k0s',
    description: 'Zero Friction Kubernetes',
    logo: 'https://repository-images.githubusercontent.com/271250363/8d3a17aa-a836-4c4d-9fb9-f326c05c6e46'
  },
  {
    name: 'KinD',
    description: 'Kubernetes in Docker',
    logo: 'https://raw.githubusercontent.com/kubernetes-sigs/kind/main/logo/logo.png'
  }
]

export function KubernetesDistros() {
  return (
    <section id="kubernetes">
      <h2>All your favorite distros</h2>
      <div className="kubernetes-grid">
        {kubernetesDistros.map((distro, index) => (
          <div key={index} className="kubernetes-item">
            <Image 
              src={distro.logo} 
              alt={distro.name}
              width={100}
              height={100}
              style={{ objectFit: 'contain' }}
            />
            <h3>{distro.name}</h3>
            <p>{distro.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}