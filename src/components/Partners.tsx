const Partners = () => {
  const platinumSponsors = [
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1739114974/hyver/d5cdkc3topnky33gdxv2.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1754829985/hyver/image_2_neqav9.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124078/hyver/zgafm8v60bodfuozxydm.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1739124280/hyver/hmb9oxcfcjcjxpp73zy6.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1739122839/hyver/v45k3ofc9g8nggbjsdxo.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1739122839/hyver/xfwnugxyopeu00q9ngwn.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1754830047/hyver/GC_Logo_v1_3_avnxbq.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1754830055/hyver/WhatsApp_Image_2025-06-26_at_12.48.27_AM_1_onezie.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1754830049/hyver/web3bridge_logo_1_rnnnum.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1754830044/hyver/Logo_nbbc_2_1_a3nlcn.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1754829787/hyver/logo_black_1_yvjmhz.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1754829989/hyver/tech_savvy_summit_logo._1_1_fkpfjw.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1754830012/hyver/GP_LOGO_BLACK_WRITING_1_bjrliv.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1754829982/hyver/image_6_ae6lka.png',
    },
    {
      logo: 'https://res.cloudinary.com/dpofk8xy0/image/upload/v1754829993/hyver/Pr%C3%A9sentation_projet_marketing_professionnel_moderne_jaune__1_-1-removebg-preview_1_okiygc.png',
    },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Work With
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Throughout our past editions, we've had the privilege to collaborate with leading 
            tech companies and organizations that share our mission of empowering African tech communities.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8 items-center justify-center">
            {platinumSponsors.map((sponsor, index) => (
              <a
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative bg-white dark:bg-gray-300 rounded-lg p-4 flex items-center justify-center h-24 transition-all duration-300 hover:shadow-lg">
                  <img
                    src={sponsor.logo}
                    className="max-h-16 w-auto object-contain group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;