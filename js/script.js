const menuItems = [
  {
    category: "Porções",
    name: "Porção de Batata Frita",
    description: "Batata cortada em palitos, crocante por fora e macia por dentro, ideal para acompanhar as bebidas.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Porções",
    name: "Frango à Passarinho",
    description: "Porção crocante e saborosa, perfeita para dividir com amigos em um happy hour.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Pizzas",
    name: "Pizza Portuguesa",
    description: "Com uma massa bem preparada e recheio saboroso, ideal para quem gosta de combinações clássicas.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Comidas",
    name: "Churrasco na Brasa",
    description: "Opção mais completa para quem procura uma refeição saborosa e encorpada.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Petiscos",
    name: "Bolinho de Queijo",
    description: "Petisco pra lá de irresistível, ideal para acompanhar cerveja e conversa.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Pratos",
    name: "Arroz com Frango",
    description: "Prato de sabor caseiro e bem servido, ideal para quem busca conforto e qualidade.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Sobremesas",
    name: "Pudim",
    description: "Sobremesa simples, saborosa e perfeita para fechar a noite com um toque doce.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=900&q=80"
  }
];

const drinks = [
  {
    category: "Chopes",
    name: "Chope Artesanal",
    description: "Cerveja de sabor suave, refrescante e perfeita para acompanhar os momentos da noite.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Cervejas",
    name: "Cerveja Premium",
    description: "Opcão clássica para quem curte uma bebida leve, equilibrada e bem gelada.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Coquetéis",
    name: "Mojito Clássico",
    description: "Refrescante e aromático, uma escolha versátil para qualquer ocasião.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Destilados",
    name: "Vodka com Limão",
    description: "Uma mistura com textura leve e sabor marcante para quem busca sofisticação.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2e7?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Vinhos",
    name: "Taça de Vinho",
    description: "Leve, elegante e refinada para acompanhar conversas e momentos especiais.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Sem álcool",
    name: "Refrigerante e Sucos",
    description: "Opções refrescantes para quem prefere uma bebida leve e saborosa sem álcool.",
    price: "R$ ______",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80"
  }
];

const buildCard = (item) => `
  <article class="product-card" data-category="${item.category}">
    <img src="${item.image}" alt="${item.name}" />
    <div class="product-card__body">
      <div>
        <span class="eyebrow">${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="product-card__meta">
        <span class="price-tag">${item.price}</span>
        <button class="btn btn-primary" type="button">Adicionar</button>
      </div>
    </div>
  </article>
`;

const renderMenu = () => {
  const target = document.getElementById("menu-grid");
  if (!target) return;

  target.innerHTML = menuItems.map(buildCard).join("");
};

const renderDrinks = () => {
  const target = document.getElementById("bebidas-grid");
  if (!target) return;

  target.innerHTML = drinks.map(buildCard).join("");
};

const applyFilter = (containerId, filterButtonsSelector) => {
  const cards = document.querySelectorAll(`#${containerId} .product-card`);
  const filterButtons = document.querySelectorAll(filterButtonsSelector);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.toggle("is-active", btn === button));

      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.style.display = show ? "flex" : "none";
      });
    });
  });
};

const toggleMenu = () => {
  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (!nav || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
};

const updateYear = () => {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();
};

const galleryModal = () => {
  const modal = document.getElementById("galleryModal");
  if (!modal) return;

  const modalImage = modal.querySelector("img");
  const closeButton = modal.querySelector(".modal-close");
  const items = document.querySelectorAll(".gallery-item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      modalImage.src = item.dataset.full;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    }
  });
};

const contactMessage = (formId, prefix, target, subject) => {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    const body = Object.entries(values)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    const message = encodeURIComponent(`${prefix}\n\n${body}`);
    const url = `https://wa.me/${target}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  });
};

const reservationSubmit = () => {
  const form = document.getElementById("reservationForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const text = [
      "Olá, gostaria de solicitar uma reserva no Xamego Bar e Choperia.",
      `Nome: ${data.nome}`,
      `Telefone: ${data.telefone}`,
      `Data: ${data.data}`,
      `Horário: ${data.horario}`,
      `Número de pessoas: ${data.pessoas}`,
      `Observações: ${data.observacoes || "Nenhuma"}`
    ].join("\n");

    window.open(`https://wa.me/5564981644207?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    form.reset();
  });
};

const setActivePage = () => {
  const body = document.body;
  const page = body.dataset.page;
  const links = document.querySelectorAll(".site-nav a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.includes(page + ".html")) {
      link.classList.add("current");
    }
  });
};

const init = () => {
  renderMenu();
  renderDrinks();
  applyFilter("menu-grid", ".filter-btn");
  applyFilter("bebidas-grid", ".filter-btn");
  toggleMenu();
  updateYear();
  galleryModal();
  reservationSubmit();
  contactMessage("contactForm", "Mensagem enviada via formulário do site:", "5564981644207", "Contato via site");
  setActivePage();
};

window.addEventListener("DOMContentLoaded", init);
