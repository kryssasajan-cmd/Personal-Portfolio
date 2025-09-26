document.addEventListener('DOMContentLoaded', function () {
  const projects = [
    {
      title: "Finance App",
      description: "Modern, clean website homepage layout with minimalist design, soft colors, and professional look.",
      imgSrc: "C:\Users\kryss\OneDrive\Desktop\LnT\FinanceApp Homepage Design Layout.png",
 
    },
    {
      title: "Digital Marketing Agency",
      description: "A creative grid of digital graphic designs including logos, posters, and branding with vibrant colors.",
      imgSrc:"C:\Users\kryss\OneDrive\Desktop\LnT\Digital Marketing Agency Homepage Layout.png",

    },
    {
      title: "Modern Art Gallery",
      description: "User-friendly task management app interface with charts and intuitive UI components in flat design.",
      imgSrc: "C:\Users\kryss\OneDrive\Desktop\LnT\Modern Art Gallery Webpage Layout.png",
     
    }
  ];

  const container = document.getElementById('projectsContainer');
  container.innerHTML = ''; // Clear any existing content

  projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    card.innerHTML = `
      <img src="${project.imgSrc}" alt="${project.title}" />
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.demoLink}" target="_blank">View Demo</a>
      </div>
    `;

    container.appendChild(card);
  });
});
