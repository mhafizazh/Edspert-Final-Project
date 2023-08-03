import cartoon from './assets/cartoon.png';

function Section() {
  const contents = [
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel',
      underTitle: '(Getting Started with Laravel 9)',
      title2: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel',
      underTitle: '(Getting Started with Laravel 9)',
      title2: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel',
      underTitle: '(Getting Started with Laravel 9)',
      title2: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel',
      underTitle: '(Getting Started with Laravel 9)',
      title2: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel',
      underTitle: '(Getting Started with Laravel 9)',
      title2: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel',
      underTitle: '(Getting Started with Laravel 9)',
      title2: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel',
      underTitle: '(Getting Started with Laravel 9)',
      title2: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    {
      headerTitle: 'Intensive Bootcamp ',
      title: 'Programming Laravel',
      underTitle: '(Getting Started with Laravel 9)',
      title2: 'Programming Laravel Getting Started with Laravel 9',
      content1: 'Batch: Setember 2023.',
      content2: 'Mentor: William Hartono, Farel Prayoga',
      price: 'Rp. 2.060.000',
      discountPrice: 'Rp. 560.000',
    },
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {contents.map((item) => (
        <section className="py-4 px-6 border rounded-md">
  <div className="flex items-center space-x-4 bg-[#090c63] rounded-t-lg  h-[128px]">
    <img src={cartoon} alt="cartoon" className="ml-2 w-16 h-16" />
    <div className='flex flex-col'>
      <h2 className="text-[#FFCD29] font-sherif font-bold">{item.headerTitle}</h2>
      <h1 className="font-bold text-white font-sherif">{item.title}</h1>
      <h3 className="text-white text-[10px]">{item.underTitle}</h3>
    </div>
  </div>
  <div className='bg-white rounded-b-lg mg-2 flex flex-col justify-center overflow-hidden'>
    <div className='p-4'>
      <h1 className='text-lg font-bold'>{item.title2}</h1>
      <h2>{item.content1}</h2>
      <h2>{item.content2}</h2>
      <h3 className='text-slate-400 line-through text-center'>{item.price}</h3>
      <h3 className="text-[#0ACF83] text-lg font-bold text-right">{item.discountPrice}</h3>
    </div>
  </div>
</section>

      ))}
    </div>
  );
}
  
export default Section;