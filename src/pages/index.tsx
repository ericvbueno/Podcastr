//SPA
//useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }, [])
//SSR
//SSG

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//Para usar o SSR basta usar getServerSideProps
export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    props:{
      episodes:data,
    },
    // Só vai utilizar o comando a seguir se for usar o SSG
    revalidate: 60 * 60 * 8, 
    // O comando revalidate recebe um numero em segundos do tempo que levará para gerar uma nova versão da página 
  }
}

