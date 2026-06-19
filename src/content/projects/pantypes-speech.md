---
title: Disentangling multimodal models
level: MSc
status: Open
year: 2026
team:
  - Student name TBA (joint with Interhuman AI)
tags: [representation learning, multi modal, behvaioral models, XAI]
links:
  - label: Related papers
    •	Frumosu, F. D., et al. (2022). "Interpretability by design using computer vision for behavioral sensing in child and adolescent psychiatry." arXiv:2207.04724.
•	Hinton, G., Vinyals, O., & Dean, J. (2015). "Distilling the Knowledge in a Neural Network." arXiv:1503.02531.
•	Ratner, A. J., et al. (2017). "Snorkel: Rapid Training Data Creation with Weak Supervision." Proceedings of the VLDB Endowment (PVLDB).
•	Hessel, J., & Lee, L. (2020). "Does My Multimodal Model Learn Cross-modal Interactions? It’s Harder to Tell than You Might Think!" EMNLP.
•	Sundararajan, M., Taly, A., & Yan, Q. (2017). "Axiomatic Attribution for Deep Networks." arXiv:1703.01365.
•	Lundberg, S. M., & Lee, S.-I. (2017). "A Unified Approach to Interpreting Model Predictions." (SHAP).

abstract: >
  Machine Learning models are typically hungry for precise data. However, in our current video dataset, human annotators provided "weak labels"—tagging a segment as "Positive Signal" without specifying if the cue was visual (e.g., a smile), audio (e.g., a laugh), or both. This ambiguity prevents us from training specific, interpretable models for each modality.
---

The goal of this project is to achieve "Interpretability by Design" (Frumosu et al., 2022) by training unimodal models that output specific behavioral concepts (e.g., "Anxiety", "Negative Affect") rather than black-box predictions. We will use a heavy multimodal to interpretable by design models. 
