const contactForm = document.querySelector("#ContactForm");
const api = "http://localhost:3333/";

const toast = new Toastify({
  text: "",
  gravity: "bottom",
  position: "right",
  duration: 3000,
});

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;

  let formData = {
    name: form.nameInput.value,
    email: form.emailInput.value,
    service: form.tipoServicoInput.value,
    subject: form.assuntoInput.value,
    message: form.mensagemInput.value,
  };

  for (const key in formData) {
    if (
      !formData[key] ||
      (key === "service" && formData[key] === "Selecione um serviço")
    ) {
      toast.options.text = "Preencha todos os campos.";
      toast.options.style.background = "#fe080a";
      toast.showToast();
      return;
    }
  }

  try {
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.options.text = "Enviado com sucesso. Agradecemos o contato!";
      toast.options.style.background = "#66c80e";
      toast.showToast();
      form.reset();
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    toast.options.text = "Oops... Algo deu errado!";
    toast.options.style.background = "#fe080a";
    toast.showToast();
  }
});
