import cartoon from './assets/cartoon.png';

function Section() {
  const contents = [
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    
  ];

  return (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {contents.map((item) => ( 
          <div className="bg-white">
            <section className="py-6 px-4 rounded-t-lg" key={item.title}>
               <button className='text-left'>
                <header className="bg-blue-900 text-white mx-0 py-2 px-4 rounded-t-lg text-right">
                  <img src={cartoon} alt="cartoon" className="w-20 h-20" />
                  <h1 className="text-[#FFCD29]">{item.headerTitle}</h1>
                  <h2 className="text-white text-lg font-bold">{item.title}</h2>
                  <h3 className="text-white">(getting started with Laravel 9)</h3>
                </header>
              </button>
              <h1 className="text-lg font-bold indent-0">{item.title}</h1>
              <p>{item.content1}</p>
              <p>{item.content2}</p>
              <h2 className="text-slate-400 line-through text-center">{item.price}</h2>
              < h2 className="text-[#0ACF83] text-lg font-bold text-right">{item.discountPrice}</h2>
            </section>
          </div>
        ))}
      </div>
    );
  }
  
export default Section;