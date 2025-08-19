const services = [
  {
    id: 1,
    name: "Développement web",
    price: "À partir de 500 $",
    description:
      "Création de sites modernes, performants et adaptés à vos besoins.",
  },
  {
    id: 2,
    name: "Conception des APIs",
    price: "À partir de 300 $",
    description:
      "Développement d’APIs sécurisées et évolutives pour vos applications.",
  },
  {
    id: 3,
    name: "Marketing digital",
    price: "À partir de 200 $",
    description:
      "Stratégies digitales pour booster votre visibilité et attirer plus de clients.",
  },
  {
    id: 4,
    name: "Référencement SEO",
    price: "À partir de 150 $",
    description:
      "Optimisation de votre site pour un meilleur positionnement dans Google.",
  },
  {
    id: 5,
    name: "Consultation",
    price: "50 $/heure",
    description:
      "Accompagnement et conseils adaptés à votre projet ou entreprise.",
  },
  {    id: 6,
    name: "Formation",
    price: "Sur devis",
    description:
      "Formations personnalisées en développement web, marketing digital et plus.",
  },
];

const TarifsServices = () => (
  <section className="py-16 bg-gray-100 px-6 lg:px-20" id="tarifs">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">💰 Nos Tarifs & Services</h2>
      <p className="text-gray-600 mb-12">
        Choisissez le service qui correspond à vos besoins et demandez un devis
        personnalisé.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{svc.name}</h3>
            <p className="text-orange-600 font-bold text-2xl mb-4">
              {svc.price}
            </p>
            <p className="text-gray-600 mb-6">{svc.description}</p>
            <button className="mt-auto bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition">
              Demander un devis
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TarifsServices;
