const API_BASE = "http://127.0.0.1:8000/api";

export async function fetchHealth() {
  const res = await fetch(`${API_BASE}/health`);
  if (!res.ok) throw new Error("Backend unavailable");
  return res.json();
}

export async function fetchMaterials() {
  const res = await fetch(`${API_BASE}/materials`);
  if (!res.ok) throw new Error("Failed to load materials");
  return res.json();
}

export async function fetchMaterial(id) {
  const res = await fetch(`${API_BASE}/materials/${id}`);
  if (!res.ok) throw new Error("Failed to load material detail");
  return res.json();
}

export async function uploadMaterial(formData) {
  const res = await fetch(`${API_BASE}/materials`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.detail || "Upload failed");
  }
  return res.json();
}

export async function deleteMaterial(id) {
  const res = await fetch(`${API_BASE}/materials/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete material");
  return res.json();
}

export async function retryProcessMaterial(id) {
  const res = await fetch(`${API_BASE}/materials/${id}/process`, {
    method: "POST",
  });
  if (!res.ok) throw new Error("Failed to retry file processing");
  return res.json();
}

export async function fetchNotes(materialId) {
  const url = materialId ? `${API_BASE}/notes?material_id=${materialId}` : `${API_BASE}/notes`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to load notes");
  return res.json();
}

export async function generateNotes(materialId, scope = "single") {
  const url = materialId 
    ? `${API_BASE}/notes/generate?material_id=${materialId}&scope=${scope}`
    : `${API_BASE}/notes/generate?scope=${scope}`;
  const res = await fetch(url, { method: "POST" });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.detail || "Note generation failed");
  }
  return res.json();
}

export async function fetchQuizzes(materialId) {
  const url = materialId ? `${API_BASE}/quizzes?material_id=${materialId}` : `${API_BASE}/quizzes`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to load quizzes");
  return res.json();
}

export async function fetchQuiz(quizId) {
  const res = await fetch(`${API_BASE}/quizzes/${quizId}`);
  if (!res.ok) throw new Error("Failed to load quiz");
  return res.json();
}

export async function generateQuiz(materialId, scope = "single", count = 4) {
  const url = materialId 
    ? `${API_BASE}/quizzes/generate?material_id=${materialId}&scope=${scope}&count=${count}`
    : `${API_BASE}/quizzes/generate?scope=${scope}&count=${count}`;
  const res = await fetch(url, { method: "POST" });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.detail || "Quiz generation failed");
  }
  return res.json();
}

export async function submitQuizAnswers(quizId, answers) {
  const res = await fetch(`${API_BASE}/quizzes/${quizId}/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers }),
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.detail || "Grading submission failed");
  }
  return res.json();
}

export async function fetchProgress() {
  const res = await fetch(`${API_BASE}/progress`);
  if (!res.ok) throw new Error("Failed to load progress metrics");
  return res.json();
}
