import styles from './Footer.module.scss'

interface IFooterProps {
    autor: string,
    email: string
}

export const Footer = ({ autor, email }: IFooterProps) => {
    return (
        <div className={styles.container}>
            <p>Site desenvolvido por <abbr title={email}>{autor}</abbr> | Todo os direitos reservados 2024 &copy;</p>
        </div>
    )
}