"use client"
import Link from 'next/link'
import styles from './page.module.css'


export default async function Home() {

  const req = await fetch("http://localhost:3003/alunos",{
    cache:"no-cache"
  });

  const data  = await req.json();

  return (
    <main className={styles.main} id="formu">

    <Link href="/cadastro">Cadastro</Link>

      {data.map(aluno=>
        <div key={aluno.id}>
          <p>{aluno.nome}</p>
          <p>{aluno.num_inscricao}</p>
          <p>{aluno.curso}</p>
        </div>
        )}
      </main>
  )
}