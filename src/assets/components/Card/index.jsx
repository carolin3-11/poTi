import styles from './styles.module.css'
function Card (props){

    return(
        <>
            <div className={styles.container}>
                <div>
                <img src={props.book} alt={props.title} className={styles.book} />
               
                <h2 className={styles.title}>{props.title}</h2>
                <p className ={styles.autor}>{props.autor}</p>
                <p classname={styles.email}>{props.email}</p>
                <div className={styles.secao}>{props.secao}</div>
                <p className={styles.titulo}>{props.titulo} </p>
                <p className ={styles.description}>{props.description} 
                <div className={styles.secao}>{props.secao}</div>
                <p className={styles.formacao}>{props.formacao}</p>
                <div className={styles.secao}>{props.secao}</div>
                <div className={styles.anosum}>{props.anosum}</div>
                <p className={styles.mecanica}>{props.mecanica}</p>
                <p className={styles.anos}>{props.anos}</p>
                <p className= {styles.descricao}> {props.descricao}</p>
                <div className={styles.secao}>{props.secao}</div>
                <p className={styles.experiencia}>{props.experiencia}</p>
                 <p className={styles.aprendiz}>{props.aprendiz}</p>
                 <p className={styles.jp}>{props.jp}</p>

                 


                
                     </p>
                <button className={styles.button}>{props.texto}</button>
                <p>

            
                <button className={styles.button}>{props.github}</button>
</p>
                </div>
                
             
            

            </div>
             
 </>
    )
}
export default Card