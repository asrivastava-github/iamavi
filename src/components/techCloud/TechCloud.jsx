import React from "react";
import "./TechCloud.scss";

const techItems = [
  {name: "ArgoCD", icon: "fas fa-sync-alt", color: "#EF7B4D"},
  {name: "Helm", icon: "fas fa-anchor", color: "#0F1689"},
  {name: "Backstage", icon: "fas fa-th-large", color: "#36BAA2"},
  {name: "Datadog", icon: "fas fa-chart-line", color: "#632CA6"},
  {name: "Prometheus", icon: "fas fa-fire", color: "#E6522C"},
  {name: "Grafana", icon: "fas fa-tachometer-alt", color: "#F46800"},
  {name: "Serverless", icon: "fas fa-bolt", color: "#FD5750"},
  {name: "EventBridge", icon: "fas fa-exchange-alt", color: "#FF9900"},
  {name: "GitOps", icon: "fas fa-code-branch", color: "#F05032"},
  {name: "WAF", icon: "fas fa-shield-alt", color: "#2ECC71"},
  {name: "IaC", icon: "fas fa-layer-group", color: "#7B42BC"},
  {name: "CI/CD", icon: "fas fa-infinity", color: "#4285F4"}
];

export default function TechCloud() {
  return (
    <div className="tech-cloud">
      <div className="tech-cloud-grid">
        {techItems.map((tech, i) => (
          <div
            key={i}
            className="tech-cloud-item"
            style={{"--delay": `${i * 0.15}s`, "--color": tech.color}}
          >
            <i className={tech.icon}></i>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
