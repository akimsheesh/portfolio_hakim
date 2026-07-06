const projects = {
  barakah: {
    title: "BarakahQurban App",
    video: "videos/BarakahQurban.mp4",
    description:
      "A mobile qurban management application prototype that supports participant registration, slot booking, payment simulation, status tracking, and e-certificate viewing.",
    role: "Mobile App Developer / UI Designer",
    tools: "Flutter, Dart, Supabase, PDF Generator, UI/UX Design",
    features: [
      "User registration and login",
      "Qurban and aqiqah slot management",
      "Payment proof upload and payment simulation",
      "Participant status tracking",
      "E-certificate preview and download"
    ]
  },

  unit4: {
    title: "Unit 4: Haiwan",
    video: "videos/Unit4 Haiwan.mp4",
    description:
      "An interactive learning application for primary school students focused on animals. The app includes mini games and multimedia elements to make learning more engaging.",
    role: "App Developer / Multimedia Designer",
    tools: "Unity, C++, Canva, Multimedia Assets",
    features: [
      "Animal learning content",
      "Interactive mini games",
      "Child-friendly interface",
      "Visual and audio learning support"
    ]
  },

  dreamwash: {
    title: "DreamWash App",
    video: "videos/DreamWash.mp4",
    description:
      "A car wash booking application designed to support users, admins, and owners in managing bookings, services, and branches.",
    role: "Mobile App Developer / UI Designer",
    tools: "Flutter, UI/UX Design, Database Design",
    features: [
      "Service booking interface",
      "User, admin, and owner modules",
      "Multi-branch management concept",
      "Booking and service management"
    ]
  },

  herojawi: {
    title: "Hero Jawi",
    video: "videos/HeroJawi.mp4",
    description:
      "An educational game designed to help primary school students learn Jawi letters through interactive and enjoyable gameplay.",
    role: "Game Developer / UI Designer",
    tools: "Unity, C#, Game Design, Canva",
    features: [
      "Jawi letter learning activities",
      "Interactive gameplay",
      "Student-friendly interface",
      "Educational game mechanics"
    ]
  },

  sulam: {
    title: "SULAM Learning Apps",
    video: "videos/SulamApps.mp4",
    description:
      "A multimedia learning application developed for primary school students with interactive content and mini games.",
    role: "App Developer / Multimedia Designer",
    tools: "Flutter, Flame, Dart, Multimedia Design",
    features: [
      "Interactive learning modules",
      "Mini games",
      "Primary school learning content",
      "Simple and engaging interface"
    ]
  },

  animation: {
    title: "Freelance Animation",
    video: "videos/FreelanceAnimation.mp4",
    description:
      "Animation and editing work focused on storytelling, motion, transitions, and visual presentation.",
    role: "Animator / Video Editor",
    tools: "Blender, CapCut, Canva, Video Editing Tools",
    features: [
      "2D and 3D animation work",
      "Scene composition",
      "Video transitions",
      "Storytelling and visual flow"
    ]
  },

  scam: {
    title: "Part Time Job Scam Animation",
    video: "videos/PartTimeJobScam.mp4",
    description:
      "A short awareness animation about online part-time job scams, designed to communicate risks through simple storytelling.",
    role: "Animator / Multimedia Designer",
    tools: "Blender, Canva, Video Editing Tools",
    features: [
      "Awareness-based storytelling",
      "Character and scene animation",
      "Message-focused visual presentation",
      "Short educational video format"
    ]
  },

  vr: {
    title: "VR Project Demo",
    video: "videos/VR Potong.mp4",
    description:
      "A virtual reality project demo that showcases immersive interaction, navigation, and 3D multimedia experience.",
    role: "VR Developer / 3D Asset Contributor",
    tools: "Unity, XR Interaction Toolkit, Blender, C#",
    features: [
      "VR interaction and navigation",
      "3D environment experience",
      "Interactive learning concept",
      "Immersive multimedia presentation"
    ]
  }
};

function openProject(projectId) {
  const project = projects[projectId];

  const modal = document.getElementById("projectModal");
  const video = document.getElementById("projectVideo");
  const source = document.getElementById("projectVideoSource");

  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("modalRole").textContent = project.role;
  document.getElementById("modalTools").textContent = project.tools;

  const featuresList = document.getElementById("modalFeatures");
  featuresList.innerHTML = "";

  project.features.forEach(function(feature) {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  source.src = project.video;
  video.load();

  modal.style.display = "flex";
}

function closeProject() {
  const modal = document.getElementById("projectModal");
  const video = document.getElementById("projectVideo");

  video.pause();
  video.currentTime = 0;
  modal.style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("projectModal");

  if (event.target === modal) {
    closeProject();
  }
};