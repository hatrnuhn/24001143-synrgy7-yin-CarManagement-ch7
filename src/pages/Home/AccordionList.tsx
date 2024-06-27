import AccordionItem from '../../components/AccordionItem'

const AccordionList = () => {
  const items = [
    { title: 'Apa saja syarat yang dibutuhkan?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, porro aut repudiandae nemo deserunt labore voluptatem molestias soluta magni quo.' },
    { title: 'Berapa hari minimal sewa mobil lepas kunci?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, porro aut repudiandae nemo deserunt labore voluptatem molestias soluta magni quo.' },
    { title: 'Berapa hari sebelumnya sebaiknya booking sewa mobil?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, porro aut repudiandae nemo deserunt labore voluptatem molestias soluta magni quo.' },
    { title: 'Apakah ada biaya antar-jemput?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, porro aut repudiandae nemo deserunt labore voluptatem molestias soluta magni quo.' },
    { title: 'Bagaimana jika terjadi kecelakaan?', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, porro aut repudiandae nemo deserunt labore voluptatem molestias soluta magni quo.' },
  ]

  return (
    <>
      {items.map((i, index) => (
        <AccordionItem key={index} title={i.title} content={i.content} />
      ))}
    </>
  )
}

export default AccordionList
