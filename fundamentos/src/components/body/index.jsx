import Card from "./Card"

import styles from "./Body.module.css"

function Body(){
    const usuarios = [
        {nome:"Ana", idade:22, cidade:"São Paulo"}, 
        {nome:"Bruno", idade:30, cidade:"Florianopólis"}, 
        {nome:"Carlos", idade:25, cidade:"Rio de Janeiro"}, 
    ]

    return(
        <main className={StyleSheet.body}>
            <h2>Usuários Cadastrados:</h2>
            <div className={styles.cardContainer}>
                <Card/>
                </div>
        </main>
    )
}

export default Body
