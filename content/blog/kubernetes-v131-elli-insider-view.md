---
title: "Kubernetes v1.31, Elli: An Insider View"
date: "2024-08-21"
author: "Matteo Bianchi"
category: "Kubernetes"
excerpt: "My experience as a Communications Shadow on the Kubernetes v1.31 release team, sharing insights into how Kubernetes releases are made and what's new in this version."
---

# Kubernetes v1.31, Elli: An Insider View

As a Communications Shadow for the Kubernetes v1.31 release, I had a front-row seat to how the world's most popular container orchestration platform gets built and shipped. Here's my insider perspective on the release named "Elli."

## The Journey to Becoming a Shadow

### Why I Applied

I've been a Kubernetes user and enthusiast for years, but I wanted to understand how the sausage gets made. The release team shadow program provides an incredible opportunity to:

- Learn the release process from the inside
- Work with experienced contributors
- Contribute to a project used by millions
- Build connections in the community

### The Application Process

Becoming a release shadow involves:

1. **Expressing interest** - Filling out the application form
2. **Selection** - The team reviews applications and selects shadows
3. **Onboarding** - Getting up to speed on processes and tools
4. **Shadowing** - Learning by doing alongside leads

The program is welcoming to newcomers while maintaining high standards.

## What Communications Shadows Do

The Communications team handles:

- **Blog posts** - Announcing the release and new features
- **Social media** - Spreading the word about updates
- **Coordination** - Working with SIG Docs and other teams
- **Documentation** - Ensuring changes are properly documented

As a shadow, I supported these efforts while learning from experienced leads.

### A Typical Day

During the release cycle:

- Morning standups with the team
- Reviewing and writing PR descriptions
- Coordinating with feature owners about blogs
- Updating stakeholders on progress
- Attending SIG meetings as needed

## What's New in Kubernetes v1.31

Kubernetes v1.31 includes 45 enhancements: 11 Stable, 22 Beta, and 12 Alpha. Here are some highlights:

### Graduating to Stable

#### AppArmor Support

AppArmor configuration is now GA! You can configure it using the `appArmorProfile.type` field in securityContext:

```yaml
securityContext:
  appArmorProfile:
    type: RuntimeDefault
```

This replaces the old annotation-based approach and provides better security configuration.

#### Improved Ingress Handling

kube-proxy now handles ingress connectivity more robustly, especially during node scaling and termination events. This improves load balancer behavior in production environments.

#### ReplicaSet Downscaling Improvements

ReplicaSets now select pods more evenly for deletion during downscaling, improving reliability in rescheduling scenarios.

### Notable Beta Features

Several features moved to beta, including improvements to:

- Sidecar containers lifecycle management
- Job success policies
- Pod lifecycle events

### Alpha Previews

New alpha features include experimental improvements in:

- Scheduling enhancements
- API changes
- Node lifecycle management

## The Release Process

### How Kubernetes Gets Released

The release happens over roughly 14 weeks:

| Phase | Duration | Focus |
|-------|----------|-------|
| Enhancements freeze | Weeks 1-4 | Feature proposals locked |
| Code freeze | Weeks 10-12 | Focus on stabilization |
| Release candidates | Weeks 12-13 | Testing and validation |
| Release | Week 14 | Ship it! |

### The Release Team

The team consists of about 35-40 volunteers across roles:

- **Release Lead** - Coordinates everything
- **Enhancements** - Tracks feature progress
- **CI Signal** - Monitors test health
- **Bug Triage** - Manages issues
- **Docs** - Ensures documentation is ready
- **Communications** - Spreads the word
- **Release Notes** - Documents changes

Each role has leads and shadows, creating a pipeline for growing new contributors.

## Lessons Learned

### 1. Community-Driven Development Works

Watching 35+ volunteers coordinate across time zones to ship a critical piece of infrastructure is inspiring. The process works because:

- Clear roles and responsibilities
- Established processes and tooling
- A culture of mentorship
- Genuine collaboration

### 2. Documentation Matters

So much work goes into ensuring changes are properly documented:

- Feature descriptions for users
- API changes for developers
- Upgrade notes for operators
- Blog posts for the community

### 3. Open Source is People

Behind every line of code, every feature, every bug fix—there's a person. The Kubernetes community is remarkably welcoming and supportive.

## The Elli Theme

Each Kubernetes release has a theme and mascot. Elli is a joyful dog representing the upbeat, community spirit driving the project forward. The 10-year milestone of Kubernetes made this release extra special.

![Elli, the Kubernetes v1.31 mascot](/images/blog/kubernetes-elli.png)

*Elli represents the joy and enthusiasm of the Kubernetes community.*

## Getting Involved

If you're interested in contributing to Kubernetes:

### Start Small

- **Good first issues** - Look for issues labeled for newcomers
- **Documentation** - Always needs help
- **Testing** - Try release candidates and report issues

### Join a SIG

Special Interest Groups (SIGs) focus on specific areas:

- SIG Docs for documentation
- SIG Release for release management
- SIG CLI for kubectl
- And many more!

### Apply to Be a Shadow

The shadow program is the perfect on-ramp:

- Learn from experienced contributors
- Make meaningful contributions
- Build your network
- Prepare for leadership roles

## Conclusion

Being a release shadow was one of the most rewarding experiences in my open source journey. I gained technical knowledge, made connections, and contributed to software used by millions.

If you're considering getting involved with Kubernetes, I can't recommend it highly enough. The community is welcoming, the work is meaningful, and the experience is invaluable.

Here's to Elli and to Kubernetes v1.31! 🐕

## Resources

- [Kubernetes v1.31 Release Notes](https://kubernetes.io/blog/2024/08/13/kubernetes-v1-31-release/)
- [CNCF Blog Post](https://www.cncf.io/blog/2024/08/29/kubernetes-v1-31-elli-an-insider-view/)
- [Join the Kubernetes Community](https://kubernetes.io/community/)

*Originally published on [blog.mb-consulting.dev](https://blog.mb-consulting.dev/)*
