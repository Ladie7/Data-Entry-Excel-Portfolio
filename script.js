const projects = [
  {
    id: "01",
    title: "Excel Data Entry & Organization",
    category: "excel data",
    tools: "Microsoft Excel",
    image: "assets/projects/excel-data-entry.jpg",
    description: "Sample project showing structured entry and organization of spreadsheet information.",
    objective: "Create a clean and readable spreadsheet structure.",
    tasks: ["Enter information into organized columns", "Apply consistent formatting", "Review the final spreadsheet"],
    skills: "Data entry, formatting, organization"
  },
  {
    id: "02",
    title: "Excel Data Cleaning",
    category: "excel data",
    tools: "Microsoft Excel",
    image: "assets/projects/excel-data-cleaning.jpg",
    description: "Practice project focused on improving spreadsheet consistency.",
    objective: "Prepare a cleaner dataset for easier use.",
    tasks: ["Remove duplicates", "Standardize formatting", "Review incomplete fields"],
    skills: "Data cleaning, sorting, filtering"
  },
  {
    id: "03",
    title: "PDF to Excel Conversion",
    category: "pdf data",
    tools: "Adobe Acrobat / Excel",
    image: "assets/projects/pdf-to-excel.jpg",
    description: "Sample conversion of information from a PDF document into Excel.",
    objective: "Transfer document information into an editable spreadsheet.",
    tasks: ["Review source PDF", "Transfer table information", "Format the output spreadsheet"],
    skills: "PDF conversion, spreadsheet formatting"
  },
  {
    id: "04",
    title: "Inventory Data Entry",
    category: "data excel",
    tools: "Microsoft Excel",
    image: "assets/projects/inventory-data-entry.jpg",
    description: "Practice inventory table containing product and stock information.",
    objective: "Organize inventory data into a usable table.",
    tasks: ["Enter product details", "Create table headings", "Apply filters"],
    skills: "Product data entry, tables, filtering"
  },
  {
    id: "05",
    title: "Product Data Entry",
    category: "data",
    tools: "Excel / Google Sheets",
    image: "assets/projects/product-data-entry.jpg",
    description: "Sample product information entry and organization project.",
    objective: "Arrange product details consistently.",
    tasks: ["Enter names and descriptions", "Organize SKUs", "Format product columns"],
    skills: "Product data, data formatting"
  },
  {
    id: "06",
    title: "Excel Lookup & Data Analysis",
    category: "excel reporting",
    tools: "Microsoft Excel",
    image: "assets/projects/excel-lookup.jpg",
    description: "Practice spreadsheet using lookup functions and basic analysis.",
    objective: "Connect and summarize related spreadsheet information.",
    tasks: ["Use lookup formulas", "Summarize values", "Review calculated results"],
    skills: "VLOOKUP, XLOOKUP, formulas"
  },
  {
    id: "07",
    title: "Google Sheets Data Organization",
    category: "data",
    tools: "Google Sheets",
    image: "assets/projects/google-sheets.jpg",
    description: "Sample organization of information in a collaborative spreadsheet.",
    objective: "Create a clear and manageable Google Sheets file.",
    tasks: ["Organize columns", "Apply formatting", "Prepare filtered views"],
    skills: "Google Sheets, organization"
  },
  {
    id: "08",
    title: "Excel Reporting Dashboard",
    category: "excel reporting",
    tools: "Microsoft Excel",
    image: "assets/projects/excel-dashboard.jpg",
    description: "Practice reporting layout using tables and visual summaries.",
    objective: "Present structured data in a simple reporting format.",
    tasks: ["Prepare summary tables", "Create basic charts", "Format report sections"],
    skills: "PivotTables, PivotCharts, reporting"
  }
];

const projectGrid = document.querySelector("#project-grid");
const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalBody = document.querySelector("#modal-body");

function renderProjects(filter = "all") {
  projectGrid.innerHTML = "";

  projects.forEach(project => {
    const visible = filter === "all" || project.category.includes(filter);
    const card = document.createElement("article");

    card.className = `project-card reveal ${visible ? "" : "hidden"}`;

    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title} sample screenshot"
             onerror="this.style.display='none'; this.parentElement.innerHTML='<span aria-hidden=&quot;true&quot;>ZB</span>'">
      </div>
      <div class="project-info">
        <span class="project-number">${project.id} — SAMPLE PROJECT</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tools">Tools: ${project.tools}</div>
        <button class="text-button project-view" data-project="${project.id}">
          View Project →
        </button>
      </div>
    `;

    projectGrid.appendChild(card);
  });

  observeReveals();
}

function openProject(projectId) {
  const project = projects.find(item => item.id === projectId);
  if (!project) return;

  modalTitle.textContent = project.title;

  modalBody.innerHTML = `
    <p><strong>Project Overview:</strong> ${project.description}</p>
    <h3>Objective</h3>
    <p>${project.objective}</p>
    <h3>Tools Used</h3>
    <p>${project.tools}</p>
    <h3>Tasks Completed</h3>
    <ul>${project.tasks.map(task => `<li>${task}</li>`).join("")}</ul>
    <h3>Skills Demonstrated</h3>
    <p>${project.skills}</p>
    <h3>Before Screenshot</h3>
    <p>Placeholder — add a source screenshot to <code>assets/projects/</code>.</p>
    <h3>After Screenshot</h3>
    <p>Placeholder — add a completed screenshot to <code>assets/projects/</code>.</p>
    <h3>Sample File</h3>
    <p>Placeholder — add the related sample file to <code>assets/projects/</code>.</p>
    <h3>Result</h3>
    <p>A more organized and usable practice file.</p>
  `;

  modal.hidden = false;
  document.body.classList.add("menu-open");
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("menu-open");
}

projectGrid.addEventListener("click", event => {
  const button = event.target.closest(".project-view");
  if (button) openProject(button.dataset.project);
});

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-overlay").addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
  document.body.classList.toggle("menu-open", open);
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme === "dark";

  if (dark) {
    delete document.documentElement.dataset.theme;
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem("theme", "dark");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.dataset.theme = "dark";
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

function observeReveals() {
  document.querySelectorAll(".reveal:not(.visible)").forEach(element => {
    revealObserver.observe(element);
  });
}

observeReveals();

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-menu a");

const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    }
  });
}, { threshold: .35 });

sections.forEach(section => activeObserver.observe(section));

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 600);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector(".form-message");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please complete all fields.";
    formMessage.style.color = "#dc2626";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "#dc2626";
    return;
  }

  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  );

  window.location.href =
    `mailto:your-email@example.com?subject=${subject}&body=${body}`;

  formMessage.textContent = "Your email application is being prepared.";
  formMessage.style.color = "#16a34a";
});

renderProjects();
