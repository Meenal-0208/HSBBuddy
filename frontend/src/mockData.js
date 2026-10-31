export const MOCK_DATA = {
  subjectName: "HSB 101: Human Structural Biology",
  stats: {
    materialsCount: 4,
    notesGenerated: 3,
    quizzesCompleted: 6,
    averageScore: 78,
    revisionTopicsCount: 5,
  },
  materials: [
    {
      id: "mat-1",
      title: "Lecture 1: Skeletal System & Bone Histology",
      filename: "Bio101_Lecture1_Skeletal.pptx",
      fileType: "pptx",
      uploadDate: "2026-10-28T14:30:00Z",
      status: "Ready", // Uploaded, Processing, Ready, Failed
      size: "4.8 MB",
      slidesCount: 38,
      extractedPreview: "Slide 1: Skeletal System Overview. Major functions: Support, Protection, Mineral Storage, Blood cell formation (Hematopoiesis).\nSlide 2: Bone Tissue Classification. Compact bone (dense, osteons) vs Spongy bone (trabeculae, red bone marrow).\nSlide 3: Cellular components: Osteoblasts (bone forming), Osteocytes (mature bone maintenance), Osteoclasts (bone resorption/breakdown).",
      hasNotes: true,
      hasQuiz: true,
    },
    {
      id: "mat-2",
      title: "Lecture 2: Muscular Architecture & Contraction",
      filename: "Bio101_Lecture2_Muscles.pdf",
      fileType: "pdf",
      uploadDate: "2026-10-29T09:15:00Z",
      status: "Ready",
      size: "6.2 MB",
      slidesCount: 42,
      extractedPreview: "Page 1: Sliding Filament Mechanism. Sarcomere structure bounded by Z-discs. Myosin thick filaments and Actin thin filaments.\nPage 2: Role of Calcium (Ca2+) and ATP in cross-bridge cycling. Sarcoplasmic reticulum stores calcium.",
      hasNotes: true,
      hasQuiz: true,
    },
    {
      id: "mat-3",
      title: "Lab Guide: Joint Classification & Synovial Fluid",
      filename: "Lab_Guide_Joints.docx",
      fileType: "docx",
      uploadDate: "2026-10-30T11:00:00Z",
      status: "Ready",
      size: "1.2 MB",
      slidesCount: 12,
      extractedPreview: "Section 1: Structural Joint Classes - Fibrous (sutures, gomphoses), Cartilaginous (synchondroses, symphyses), and Synovial (diarthroses with capsule).",
      hasNotes: false,
      hasQuiz: false,
    },
    {
      id: "mat-4",
      title: "Seminar Notes: Osteoporosis & Metabolic Disorders",
      filename: "Seminar_Metabolic_Bone.pptx",
      fileType: "pptx",
      uploadDate: "2026-10-31T18:20:00Z",
      status: "Processing",
      size: "8.1 MB",
      slidesCount: 0,
      extractedPreview: "",
      hasNotes: false,
      hasQuiz: false,
    }
  ],
  notes: {
    "mat-1": {
      materialId: "mat-1",
      materialTitle: "Lecture 1: Skeletal System & Bone Histology",
      updatedAt: "2026-10-28T14:45:00Z",
      overview: "Comprehensive breakdown of human skeletal biology, bone tissue histology, remodeling cycles, and calcium homeostasis regulation.",
      sections: [
        {
          heading: "1. Core Functions of Skeletal Tissue",
          content: "• Support & Structural Frame: Provides scaffold for soft tissues and organ attachment.\n• Protection: Cranium shields brain, thoracic cage shields heart/lungs.\n• Mineral Homeostasis: Regulates calcium and phosphate reserves (99% body Ca in bones).\n• Hematopoiesis: Red bone marrow produces erythrocytes, leukocytes, and thrombocytes.",
          sourceRef: "Slide 2-5"
        },
        {
          heading: "2. Bone Cell Types & Dynamics",
          content: "• Osteoprogenitor Cells: Stem cells derived from mesenchyme, divide to generate osteoblasts.\n• Osteoblasts: Synthesize and secrete collagenous osteoid matrix; initiate calcification.\n• Osteocytes: Primary mature cells situated inside lacunae; monitor mechanical stress via canaliculi.\n• Osteoclasts: Giant multinucleated cells derived from monocytes; mediate bone resorption by acid dissolution.",
          sourceRef: "Slide 12-16"
        },
        {
          heading: "3. Microscopic Structure: Osteon Anatomy",
          content: "• Haversian Canal: Central vascular and nerve bundle canal.\n• Concentric Lamellae: Rings of calcified matrix alternating collagen orientation for torsional strength.\n• Volkmann's (Perforating) Canals: Transverse conduits connecting periosteum to central canals.",
          sourceRef: "Slide 21-24"
        },
        {
          heading: "4. Exam Takeaways & Common Traps",
          content: "⚠️ Watch out: Do not confuse Osteoblasts (Bone-BUILDERS) with Osteoclasts (Bone-CRUNCHERS/resorbers).\n⚠️ Remember: Spongy bone does NOT lack lamellae; it lacks osteons. Lamellae are arranged in trabeculae.",
          sourceRef: "Slide 35"
        }
      ]
    }
  },
  sampleQuiz: {
    id: "quiz-sample-1",
    title: "Skeletal System & Histology Mastery Quiz",
    sourceMaterial: "Lecture 1: Skeletal System & Bone Histology",
    totalQuestions: 4,
    questions: [
      {
        id: "q-1",
        type: "single", // single, multiple, true_false
        prompt: "Which bone cells are directly responsible for synthesizing and secreting the unmineralized organic bone matrix (osteoid)?",
        options: [
          { id: "A", text: "Osteoprogenitor cells" },
          { id: "B", text: "Osteoblasts" },
          { id: "C", text: "Osteocytes" },
          { id: "D", text: "Osteoclasts" }
        ],
        hint: "Think about which cell type is the 'builder' before it becomes entombed in its own matrix.",
        explanation: "Osteoblasts actively secrete collagen fibers and ground substance (osteoid). Once surrounded by calcified matrix, they differentiate into mature osteocytes.",
        sourceRef: "Slide 14",
        conceptTag: "Bone Cell Histology"
      },
      {
        id: "q-2",
        type: "multiple",
        prompt: "Select ALL of the following features that correctly characterize Cancellous (Spongy) bone: (Select all that apply)",
        options: [
          { id: "A", text: "Organized into true repeating Haversian systems (Osteons)" },
          { id: "B", text: "Contains branching lattice networks termed trabeculae" },
          { id: "C", text: "Houses red bone marrow responsible for hematopoiesis" },
          { id: "D", text: "Oriented along lines of mechanical stress to dissipate forces" }
        ],
        hint: "Spongy bone is porous and lightweight, but still has organized microscopic rings.",
        explanation: "Trabecular bone is composed of irregular trabecular lattices, contains marrow, and aligns along stress vectors. True osteons with central canals are unique to compact bone.",
        sourceRef: "Slide 19-20",
        conceptTag: "Spongy vs Compact Bone"
      },
      {
        id: "q-3",
        type: "true_false",
        prompt: "True or False: Canaliculi are microscopic canal networks that allow osteocytes inside lacunae to share nutrients and communicate via gap junctions.",
        options: [
          { id: "true", text: "True" },
          { id: "false", text: "False" }
        ],
        hint: "Because bone matrix is impermeable and mineralized, cells need tiny channels to stay alive.",
        explanation: "True. Mineralized bone matrix does not allow free diffusion of nutrients. Cytoplasmic projections of osteocytes extend through canaliculi to exchange nutrients and signals.",
        sourceRef: "Slide 22",
        conceptTag: "Canaliculi & Diffusion"
      },
      {
        id: "q-4",
        type: "single",
        prompt: "Which hormone stimulates osteoclast activity when extracellular blood calcium levels drop below normal homeostasis?",
        options: [
          { id: "A", text: "Calcitonin" },
          { id: "B", text: "Parathyroid Hormone (PTH)" },
          { id: "C", text: "Insulin" },
          { id: "D", text: "Aldosterone" }
        ],
        hint: "This hormone is secreted by 4 small glands located on the posterior surface of the thyroid.",
        explanation: "Parathyroid hormone (PTH) responds to hypocalcemia by activating osteoclasts to dissolve bone matrix and release Ca2+ back into plasma.",
        sourceRef: "Slide 31",
        conceptTag: "Calcium Homeostasis"
      }
    ]
  },
  attemptsHistory: [
    {
      id: "att-101",
      quizTitle: "Skeletal System & Histology Mastery Quiz",
      source: "Lecture 1: Skeletal System",
      date: "2026-10-30T16:20:00Z",
      score: 75,
      totalQuestions: 4,
      correctCount: 3,
      missedConcepts: ["Calcium Homeostasis"]
    },
    {
      id: "att-102",
      quizTitle: "Muscular Contraction & Sliding Filament",
      source: "Lecture 2: Muscular Architecture",
      date: "2026-10-31T11:10:00Z",
      score: 50,
      totalQuestions: 6,
      correctCount: 3,
      missedConcepts: ["Troponin vs Tropomyosin", "Sarcoplasmic Reticulum Calcium release", "Cross-bridge power stroke"]
    }
  ],
  revisionQueue: [
    {
      id: "rev-1",
      concept: "Calcium Homeostasis & Parathyroid Regulation",
      sourceMaterial: "Lecture 1: Skeletal System",
      missCount: 2,
      lastPracticed: "2026-10-30",
      status: "Needs Practice"
    },
    {
      id: "rev-2",
      concept: "Troponin vs Tropomyosin roles in cross-bridge formation",
      sourceMaterial: "Lecture 2: Muscular Architecture",
      missCount: 3,
      lastPracticed: "2026-10-31",
      status: "High Priority"
    },
    {
      id: "rev-3",
      concept: "Spongy Bone Trabecular orientation",
      sourceMaterial: "Lecture 1: Skeletal System",
      missCount: 1,
      lastPracticed: "2026-10-29",
      status: "Review"
    }
  ]
};
