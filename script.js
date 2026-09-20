const projects = [
  {
  id: "01",
  title: "Excel Data Entry & Organization",
  category: "excel data",
  tools: "Microsoft Excel",

  image: "/assets/images/excel-data-entry-after.png",
  beforeImage: "/assets/images/excel-data-entry-before.png",
  afterImage: "/assets/images/excel-data-entry-after.png",
  sampleFile: "/assets/projects/excel-sample.xlsx",

  description: "Sample project showing structured entry and organization of spreadsheet information.",

  objective: "Create a clean and readable spreadsheet structure.",

  tasks: [
    "Enter information into organized columns",
    "Apply consistent formatting",
    "Review the final spreadsheet"
  ],

  skills: "Data entry, formatting, organization",

  result: "A clean and organized Excel spreadsheet with consistent formatting."
},

  {
  id: "02",
  title: "Excel Data Cleaning",
  category: "excel data",
  tools: "Microsoft Excel",

  image: "/assets/images/excel-data-cleaning-after.png",
  beforeImage: "/assets/images/excel-data-cleaning-before.png",
  afterImage: "/assets/images/excel-data-cleaning-after.png",
  sampleFile: "/assets/projects/data-cleaning-sample.xlsx",

  description: "Practice project focused on improving spreadsheet consistency.",

  objective: "Prepare a cleaner dataset for easier use.",

  tasks: [
    "Remove duplicates",
    "Standardize formatting",
    "Review incomplete fields"
  ],

  skills: "Data cleaning, sorting, filtering",

  result: "A cleaner and more consistent Excel dataset prepared for easier use."
},

  {
  id: "03",
  title: "PDF to Excel Conversion",
  category: "pdf data",
  tools: "Adobe Acrobat / Excel",

  image: "/assets/images/pdf-to-excel-after.png",
  beforeImage: "/assets/images/pdf-to-excel-before.png",
  afterImage: "/assets/images/pdf-to-excel-after.png",
  sampleFile: "/assets/projects/pdf-conversion-sample.xlsx",

  description: "Sample conversion of information from a PDF document into an organized Excel spreadsheet.",

  objective: "Transfer document information into an editable and structured Excel spreadsheet.",

  tasks: [
    "Review the source PDF",
    "Transfer table information to Excel",
    "Organize rows and columns",
    "Format the output spreadsheet",
    "Review the converted data"
  ],

  skills: "PDF conversion, data entry, Excel formatting, data organization",

  result: "An organized Excel spreadsheet created from a PDF source document."
},

  {
    id: "04",
    title: "Inventory Data Entry",
    category: "data entry excel",
    tools: "Microsoft Excel",

    image: "/assets/images/inventory-data-entry-after.png",
    beforeImage: "/assets/images/inventory-data-entry-before.png",
    afterImage: "/assets/images/inventory-data-entry-after.png",
    sampleFile: "/assets/projects/inventory-data-entry-sample.xlsx",

    description: "Inventory data entry and formatting practice using product, category, stock quantity, and unit price information.",

    objective: "Enter, organize, and format inventory data into a clean and structured Excel table.",

    tasks: [
      "Enter product and inventory data",
      "Create a structured Excel table",
      "Apply filters and table formatting",
      "Format stock quantities and unit prices",
      "Adjust column widths and data alignment"
    ],

    skills: "Data entry, Excel tables, filtering, data formatting, inventory organization",

    result: "A clean and organized inventory spreadsheet suitable for basic stock management."
  },

  {
  id: "05",
  title: "Product Data Entry",
  category: "data",
  tools: "Microsoft Excel / Google Sheets",

  image: "/assets/images/product-data-entry-after.png",
  beforeImage: "/assets/images/product-data-entry-before.png",
  afterImage: "/assets/images/product-data-entry-after.png",
  sampleFile: "/assets/projects/product-data-entry-sample.xlsx",

  description: "Sample product information entry and organization project using structured product records.",

  objective: "Enter, organize, and format product information in a clear and consistent spreadsheet.",

  tasks: [
    "Enter product information",
    "Organize product IDs and SKUs",
    "Categorize products",
    "Format prices and stock quantities",
    "Apply table formatting and filters",
    "Review the final product data"
  ],

  skills: "Product data entry, Excel tables, data organization, formatting, sorting and filtering",

  result: "A structured product information spreadsheet with organized records, consistent formatting, and clear inventory details."
},

  {
    id: "06",
    title: "Excel Lookup & Data Analysis",
    category: "excel reporting",
    tools: "Microsoft Excel",

    image: "/assets/images/lookup-analysis-after.png",
    beforeImage: "/assets/images/lookup-analysis-before.png",
    afterImage: "/assets/images/lookup-analysis-after.png",
    sampleFile: "/assets/projects/excel-lookup-analysis-sample.xlsx",

    description: "Practice spreadsheet using lookup functions and basic analysis.",

    objective: "Connect and summarize related spreadsheet information.",

    tasks: [
      "Use lookup formulas",
      "Summarize values",
      "Review calculated results"
    ],

    skills: "VLOOKUP, XLOOKUP, formulas",

    result: "A structured Excel analysis file demonstrating lookup functions and basic data analysis."
  },

    {
    id: "07",
    title: "Google Sheets Data Organization",
    category: "data organization",
    tools: "Google Sheets",

    image: "/assets/images/google-sheets-data-after.png",
    beforeImage: "/assets/images/google-sheets-data-before.png",
    afterImage: "/assets/images/google-sheets-data-after.png",

    googleSheetUrl: "https://docs.google.com/spreadsheets/d/1KTEYLHBhDz-UcE36NMsm2xZPCZ5l-2gNjoJqtgjv7wo/edit?usp=sharing",

    description: "Sample project focused on organizing and formatting customer order data in Google Sheets.",

    objective: "Organize customer information into a clean, readable, and easy-to-filter Google Sheets table.",

    tasks: [
      "Enter and organize customer information",
      "Adjust rows and column widths",
      "Apply consistent table formatting",
      "Align and format spreadsheet data",
      "Create filters for easier data review",
      "Apply conditional formatting to order status",
      "Review the final spreadsheet"
    ],

    skills: "Google Sheets, data organization, formatting, filtering, conditional formatting",

    result: "A clean and structured Google Sheets dataset with organized customer records, filters, and clear order status formatting."
  },

  {
    id: "08",
  title: "Excel Reporting Dashboard",
  category: "excel reporting",
  tools: "Microsoft Excel",

  image: "/assets/images/excel-reporting-after.png",
  beforeImage: "/assets/images/excel-reporting-before.png",
  afterImage: "/assets/images/excel-reporting-after.png",
  sampleFile: "/assets/projects/reporting-sample.xlsx",

  description: "Practice reporting project using structured data, summary tables, and a visual Excel dashboard.",

  objective: "Present organized data in a clear and easy-to-read reporting dashboard.",

  tasks: [
    "Prepare and organize source data",
    "Create summary tables",
    "Create charts and visual summaries",
    "Build a simple reporting dashboard",
    "Review the final report"
  ],

  skills: "Excel reporting, PivotTables, PivotCharts, data organization, dashboard formatting",

  result: "A clear Excel reporting dashboard that summarizes structured data using tables and visual charts."
},
];
const certificates = [
  {
    id: "01",
    title: "PRDV004: Spreadsheets",
    provider: "Saylor Academy",
    date: "2026",
    image: "/assets/certificates/saylor-prdv004-spreadsheets.png",
    file: "/assets/certificates/saylor-prdv004-spreadsheets.pdf"
  },

  {
    id: "02",
    title: "PRDV006: Spreadsheets II: Formatting and Functions",
    provider: "Saylor Academy",
    date: "2026",
    image: "/assets/certificates/saylor-prdv006-spreadsheets-ii.png",
    file: "/assets/certificates/saylor-prdv006-spreadsheets-ii.pdf"
  },

  {
    id: "03",
    title: "مهارات متقدمة في Excel (2)",
    provider: "Edraak",
    date: "2026",
    image: "/assets/certificates/edraak-advanced-excel-2-ar.png",
    file: "/assets/certificates/edraak-advanced-excel-2-ar.pdf"
  },

  {
    id: "04",
    title: "Advanced Excel",
    provider: "Edraak",
    date: "2026",
    image: "/assets/certificates/edraak-advanced-excel-en.png",
    file: "/assets/certificates/edraak-advanced-excel-en.pdf"
  },

  {
    id: "05",
    title: "Google Sheets",
    provider: "Udacity",
    date: "2026",
    image: "/assets/certificates/udacity-google-sheets.png",
    file: "/assets/certificates/udacity-google-sheets.pdf"
  },

  {
    id: "06",
    title: "Excel Dashboard",
    provider: "Rwaq",
    date: "2026",
    image: "/assets/certificates/rwaq-excel-dashboard.png",
    file: "/assets/certificates/rwaq-excel-dashboard.pdf"
  }
];

const projectGrid = document.querySelector("#project-grid");
const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalBody = document.querySelector("#modal-body");
const certificateGrid = document.querySelector("#certificate-grid");

function renderCertificates() {
  if (!certificateGrid) return;

  certificateGrid.innerHTML = "";

  certificates.forEach(certificate => {
    const card = document.createElement("article");
    card.className = "certificate-card reveal";

    card.innerHTML = `
      <div class="certificate-image">
        <img
          src="${certificate.image}"
          alt="${certificate.title} certificate"
          loading="lazy"
        >
      </div>

      <div class="certificate-info">
        <span class="certificate-number">
          ${certificate.id} — CERTIFICATE
        </span>

        <h3>${certificate.title}</h3>

        <p><strong>Provider:</strong> ${certificate.provider}</p>
        <p><strong>Date:</strong> ${certificate.date}</p>

        <a
          href="${certificate.file}"
          class="text-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate →
        </a>
      </div>
    `;

    certificateGrid.appendChild(card);
  });

  observeReveals();
}

function renderProjects(filter = "all") {
  projectGrid.innerHTML = "";

  projects.forEach(project => {
    const visible =
      filter === "all" || project.category.includes(filter);

    const card = document.createElement("article");

    card.className = `project-card reveal ${visible ? "" : "hidden"}`;

    card.innerHTML = `
      <div class="project-image">
        <img
          src="${project.image}"
          alt="${project.title} sample screenshot"
          onerror="this.style.display='none'; this.parentElement.innerHTML='<span aria-hidden=&quot;true&quot;>ZB</span>'"
        >
      </div>

      <div class="project-info">
        <span class="project-number">
          ${project.id} — SAMPLE PROJECT
        </span>

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <div class="project-tools">
          Tools: ${project.tools}
        </div>

        <button
          class="text-button project-view"
          data-project="${project.id}"
        >
          View Project →
        </button>
      </div>
    `;

    projectGrid.appendChild(card);
  });

  observeReveals();
}


/* =========================================
   PROJECT DETAILS
   ========================================= */

function openProject(projectId) {
  const project = projects.find(item => item.id === projectId);

  if (!project) return;

  modalTitle.textContent = project.title;


  /* Before Screenshot */

  const beforeSection = project.beforeImage
    ? `
      <h3>Before Screenshot</h3>

      <div class="project-detail-image-wrapper">
        <img
          src="${project.beforeImage}"
          alt="${project.title} before screenshot"
          class="project-detail-image"
        >
      </div>
    `
    : "";


  /* After Screenshot */

  const afterSection = project.afterImage
    ? `
      <h3>After Screenshot</h3>

      <div class="project-detail-image-wrapper">
        <img
          src="${project.afterImage}"
          alt="${project.title} after screenshot"
          class="project-detail-image"
        >
      </div>
    `
    : "";


  /* Sample File */

  const sampleFileSection = project.sampleFile
    ? `
      <h3>Sample File</h3>

      <p>
        <a
          href="${project.sampleFile}"
          target="_blank"
          rel="noopener noreferrer"
        >
          View / Download Sample File →
        </a>
      </p>
    `
    : "";


  /* Result */

  const resultSection = project.result
    ? `
      <h3>Result</h3>
      <p>${project.result}</p>
    `
    : "";


  /* Modal Content */

  modalBody.innerHTML = `
    <p>
      <strong>Project Overview:</strong>
      ${project.description}
    </p>

    <h3>Objective</h3>
    <p>${project.objective}</p>

    <h3>Tools Used</h3>
    <p>${project.tools}</p>

    <h3>Tasks Completed</h3>

    <ul>
      ${project.tasks
        .map(task => `<li>${task}</li>`)
        .join("")}
    </ul>

    <h3>Skills Demonstrated</h3>
    <p>${project.skills}</p>

    ${beforeSection}

    ${afterSection}

    ${sampleFileSection}

    ${resultSection}
  `;


  modal.hidden = false;

  document.body.classList.add("menu-open");

  modal.querySelector(".modal-close").focus();
}


function closeModal() {
  modal.hidden = true;

  document.body.classList.remove("menu-open");
}


/* =========================================
   PROJECT BUTTON
   ========================================= */

projectGrid.addEventListener("click", event => {
  const button = event.target.closest(".project-view");

  if (button) {
    openProject(button.dataset.project);
  }
});


/* =========================================
   FILTER BUTTONS
   ========================================= */

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {

    const activeButton =
      document.querySelector(".filter-btn.active");

    if (activeButton) {
      activeButton.classList.remove("active");
    }

    button.classList.add("active");

    renderProjects(button.dataset.filter);
  });
});


/* =========================================
   MODAL
   ========================================= */

document
  .querySelector(".modal-close")
  .addEventListener("click", closeModal);


document
  .querySelector(".modal-overlay")
  .addEventListener("click", closeModal);


document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

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


/* =========================================
   DARK MODE
   ========================================= */

const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {

  const dark =
    document.documentElement.dataset.theme === "dark";

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


/* =========================================
   REVEAL ANIMATION
   ========================================= */

const revealObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);
      }

    });

  },
  { threshold: 0.12 }
);


function observeReveals() {

  document
    .querySelectorAll(".reveal:not(.visible)")
    .forEach(element => {

      revealObserver.observe(element);

    });
}


observeReveals();


/* =========================================
   ACTIVE NAVIGATION
   ========================================= */

const sections =
  document.querySelectorAll("main section[id]");

const navLinks =
  document.querySelectorAll(".nav-menu a");


const activeObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navLinks.forEach(link => {

          link.classList.toggle(
            "active",
            link.getAttribute("href") ===
              `#${entry.target.id}`
          );

        });

      }

    });

  },
  { threshold: 0.35 }
);


sections.forEach(section => {
  activeObserver.observe(section);
});


/* =========================================
   BACK TO TOP
   ========================================= */

const backToTop =
  document.querySelector(".back-to-top");


window.addEventListener("scroll", () => {

  backToTop.classList.toggle(
    "visible",
    window.scrollY > 600
  );

});


backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================================
   CONTACT FORM
   ========================================= */

const contactForm =
  document.querySelector("#contact-form");

const formMessage =
  document.querySelector(".form-message");


contactForm.addEventListener("submit", event => {

  event.preventDefault();

  const name =
    document.querySelector("#name").value.trim();

  const email =
    document.querySelector("#email").value.trim();

  const message =
    document.querySelector("#message").value.trim();


  if (!name || !email || !message) {

    formMessage.textContent =
      "Please complete all fields.";

    formMessage.style.color = "#dc2626";

    return;
  }


  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {

    formMessage.textContent =
      "Please enter a valid email address.";

    formMessage.style.color = "#dc2626";

    return;
  }


  const subject =
    encodeURIComponent(
      `Portfolio inquiry from ${name}`
    );


  const body =
    encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );


  window.location.href =
    `mailto:your-email@example.com?subject=${subject}&body=${body}`;


  formMessage.textContent =
    "Your email application is being prepared.";

  formMessage.style.color = "#16a34a";
});


/* =========================================
   INITIAL RENDER
   ========================================= */

renderProjects();
renderCertificates();
