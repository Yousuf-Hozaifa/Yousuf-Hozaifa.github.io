/* ALL SITE CONTENT LIVES HERE. Edit this file only; no design code needs to change.
   Add a project: copy an object in "projects". Empty start/code/demo show "add later" placeholders. */
window.SITE = {
 "name": "Md. Yousuf Hozaifa",
 "short": "Hozaifa",
 "title": "AI Engineer and Researcher",
 "roles": [
  "LLM security",
  "Explainable AI",
  "Federated learning",
  "Agentic RAG",
  "Production ML"
 ],
 "availability": "Open to AI/ML engineer and research roles",
 "email": "mdyousufhozaifa@gmail.com",
 "location": "Dhaka, Bangladesh",
 "cv": "assets/resume.pdf",
 "links": {
  "GitHub": "https://github.com/Yousuf-Hozaifa",
  "LinkedIn": "https://www.linkedin.com/in/yousuf-hozaifa/"
 },
 "bio": "I'm a research assistant at AMIR Lab and a Computer Science and Engineering graduate of East West University. I build secure generative AI pipelines and federated learning systems in PyTorch, and I care about models that stay fast, private and explainable once they leave the notebook.",
 "stats": [
  {
   "v": "4",
   "l": "projects shipped"
  },
  {
   "v": "4",
   "l": "research works"
  },
  {
   "v": "2",
   "l": "ICCIT 2026 submissions"
  }
 ],
 "projects": [
  {
   "id": "gateway",
   "title": "AI Gateway: Secured and Observable Entry Point for RAG and Receipt Understanding",
   "stack": "FastAPI · Docker · Prometheus",
   "cat": "MLOps",
   "status": "Live",
   "featured": true,
   "start": "",
   "desc": "An API gateway in front of a FAISS document Q&A service and an OCR plus LayoutLMv3 receipt extractor, with API-key auth, token-bucket rate limiting, retries and timeouts. A rule-based prompt-injection filter scores questions and retrieved passages: on 40 attacks and 40 benign queries it blocked 55% of attacks (75% blocked or flagged) at a 5% false-block rate. Includes Prometheus metrics, JSON logs with request-ID tracing, and CI/CD with 45 tests.",
   "tags": [
    "RAG",
    "FAISS",
    "LayoutLMv3",
    "GitHub Actions"
   ],
   "code": "https://github.com/Yousuf-Hozaifa/ai-gateway",
   "demo": "https://ai-gateway-api-zi9y.onrender.com/dashboard",
   "metric": {
    "v": "75%",
    "l": "attacks blocked or flagged at a 5% false-block rate"
   }
  },
  {
   "id": "rag",
   "title": "Enterprise RAG Chatbot Platform",
   "stack": "Gemini · FAISS · Gradio",
   "cat": "RAG",
   "status": "Open source",
   "featured": false,
   "start": "",
   "desc": "Chat with private PDF documentation using local FAISS vector search and Google Gemini. Uses sliding-window chunking (800 characters, 150 overlap), all-MiniLM-L6-v2 embeddings, conversation memory, and a two-layer guardrail: a vector-distance threshold that rejects out-of-scope questions before any API call, plus strict context-only prompting.",
   "tags": [
    "Python",
    "Sentence-Transformers",
    "FAISS",
    "Gemini",
    "Gradio"
   ],
   "code": "https://github.com/Yousuf-Hozaifa/mysoft_rag_chatbot",
   "demo": "",
   "metric": {
    "v": "384-d",
    "l": "local embeddings, runs on CPU"
   }
  },
  {
   "id": "finetune",
   "title": "LLM Chatbot with LoRA/QLoRA Fine-Tuning",
   "stack": "FastAPI · Ollama · Qwen2.5-1.5B",
   "cat": "LLM",
   "status": "Open source",
   "featured": false,
   "start": "",
   "desc": "A fine-tunable chatbot built for consumer hardware (8 GB RAM, no GPU). Training runs on Kaggle's free T4 with QLoRA, adapters are merged and quantized to GGUF, and a CPU-only FastAPI service serves the model through Ollama with multi-turn memory, health checks, Docker Compose and pytest tests.",
   "tags": [
    "PEFT",
    "QLoRA",
    "Qwen2.5",
    "Ollama",
    "Docker"
   ],
   "code": "https://github.com/Yousuf-Hozaifa/llm-chatbot-finetuning",
   "demo": "",
   "metric": {
    "v": "8 GB",
    "l": "RAM and no GPU needed to serve"
   }
  },
  {
   "id": "leads",
   "title": "AI Lead Handler: LLM Agent for Lead Classification",
   "stack": "LLaMA 3.1 · Groq · n8n",
   "cat": "Agents",
   "status": "Prototype",
   "featured": false,
   "start": "",
   "desc": "An agent workflow that classifies inbound leads as Sales, Support or Spam, extracts name, company, requirement, email and phone, and writes a personalized reply. Exposed as a JSON REST API with Swagger docs and a browser form, containerized for Hugging Face Spaces.",
   "tags": [
    "AI Agents",
    "REST API",
    "Docker",
    "Hugging Face Spaces"
   ],
   "code": "https://github.com/Yousuf-Hozaifa/AI_Agent_Workflow_Automation_with_n8n_and_LLM",
   "demo": "",
   "metric": {
    "v": "3",
    "l": "lead classes: Sales, Support, Spam"
   }
  }
 ],
 "research": [
  {
   "id": "fed",
   "title": "Fed-MU: Modality-Preserving Federated Unlearning for Multimodal Medical AI",
   "status": "Submitted",
   "venue": "Submitted to ICCIT 2026",
   "start": "",
   "desc": "A federated unlearning framework that removes patient-specific knowledge from multimodal medical models while keeping image-text alignment, without full retraining. Studies privacy-utility trade-offs on heterogeneous clients and uses XAI to read representation shifts.",
   "tags": [
    "PyTorch",
    "Federated Learning",
    "Medical AI",
    "XAI"
   ],
   "code": "https://github.com/Yousuf-Hozaifa/fedmu-implementation",
   "demo": "",
   "metric": {
    "v": "ICCIT 2026",
    "l": "conference submission"
   }
  },
  {
   "id": "tool",
   "title": "Tool Use Across Scale: Do Large-Model Tool-Calling Strategies Transfer to Small Models?",
   "status": "Submitted",
   "venue": "Submitted to ICCIT 2026",
   "start": "",
   "desc": "An evaluation framework for 1B to 3B parameter models on API-Bank. On Llama-3.2 and Qwen2.5, retrieval-based tool filtering mainly improves token efficiency and tool-calling reliability, not raw tool-selection accuracy.",
   "tags": [
    "LLMs",
    "Tool Calling",
    "Small Language Models",
    "API-Bank"
   ],
   "code": "",
   "demo": "",
   "metric": {
    "v": "1B to 3B",
    "l": "model scale studied"
   }
  },
  {
   "id": "lead",
   "title": "LEAD: Latent-Entropic Adversarial Defense for LLMs",
   "status": "Active",
   "venue": "Active research · manuscript in preparation",
   "start": "",
   "desc": "A dual-stage defense against gradient-based attacks (GCG) and fluent jailbreaks (PAIR, AutoDAN). A DistilGPT2 entropy screen runs on a single T4 GPU, and latent analysis of Llama-3-8B finds a consistent refusal direction. Preliminary: all GCG attacks detected (N > 350), 97.1% robustness to fluent jailbreaks, 98.86% pass rate on benign prompts.",
   "tags": [
    "Llama-3-8B",
    "DistilGPT2",
    "XAI",
    "Adversarial Defense"
   ],
   "code": "",
   "demo": "",
   "metric": {
    "v": "97.1%",
    "l": "jailbreak robustness"
   }
  },
  {
   "id": "circ",
   "title": "The Adversarial Circuit: Prompt Injection in Agentic RAG",
   "status": "Active",
   "venue": "Active research",
   "start": "",
   "desc": "A glass-box interpretability study that tracks hidden-state trajectories across transformer layers during retrieval, tool use and multi-step reasoning, to explain hallucination, reasoning degradation and indirect prompt injection.",
   "tags": [
    "PCA",
    "UMAP",
    "Tuned Lens",
    "Logit Lens",
    "LangChain"
   ],
   "code": "",
   "demo": "",
   "metric": {
    "v": "4",
    "l": "interpretability lenses"
   }
  }
 ],
 "experience": [
  {
   "role": "Research Assistant",
   "org": "AMIR Lab",
   "place": "Dhaka",
   "dates": "Feb 2026 to present",
   "current": true,
   "note": "NLP and Computational Linguistics",
   "points": [
    "Design performance-optimized models in PyTorch and TensorFlow for generative AI, LLMs and explainable AI.",
    "Run rigorous experiments on large datasets to test new research hypotheses.",
    "Co-author papers and conference presentations with senior researchers."
   ]
  },
  {
   "role": "Undergraduate Teaching Assistant",
   "org": "East West University",
   "place": "Dhaka",
   "dates": "Jun to Sep 2025",
   "current": false,
   "note": "Algorithms, Data Communications and Networking",
   "points": [
    "Ran labs and evaluated assignments on algorithmic problems.",
    "Mentored students in AI, machine learning, graph theory, dynamic programming and network protocols."
   ]
  },
  {
   "role": "Mathematics Teacher and Examiner",
   "org": "Udvash",
   "place": "Dhaka",
   "dates": "Dec 2019 to May 2022",
   "current": false,
   "note": "",
   "points": [
    "Taught Class 12 mathematics through interactive sessions.",
    "Graded engineering admission model tests and gave written feedback."
   ]
  }
 ],
 "education": [
  {
   "deg": "B.Sc. in Computer Science and Engineering",
   "org": "East West University, Dhaka",
   "dates": "Feb 2022 to Mar 2026",
   "tag": "Graduated",
   "desc": "Focused on machine learning, algorithms and networks, with research in LLM security, federated learning and explainable AI."
  },
  {
   "deg": "B.Sc. in Civil Engineering",
   "org": "Gopalganj Science and Technology University",
   "dates": "Mar 2019 to Dec 2021",
   "tag": "",
   "desc": "Transferred to East West University to pursue machine learning and computer science."
  }
 ],
 "skills": {
  "AI and ML frameworks": "TensorFlow, PyTorch, Scikit-learn, LangChain",
  "AI security and LLMs": "Latent space analysis, adversarial defense (GCG, AutoDAN), prompt engineering, LLaMA-3, DistilGPT2",
  "RAG and document AI": "RAG, FAISS, Sentence-Transformers, OCR, LayoutLMv3",
  "Machine learning": "Federated learning (FedAvg), ViT, SAM, Stable Diffusion",
  "Backend and APIs": "FastAPI, REST APIs, Swagger, API-key authentication, rate limiting",
  "Data science": "NumPy, Pandas, Matplotlib",
  "Programming": "Python, C++, SQL, LaTeX",
  "Tools and DevOps": "Git, GitHub Actions, Docker, Prometheus, GHCR, Render, Hugging Face Spaces, Colab, Jupyter, Linux"
 }
};
