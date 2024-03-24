import styles from './Footer.module.scss'

interface IFooterProps {
    autor: string,
}

export const Footer = ({ autor }: IFooterProps) => {
    return (
        <div className={styles.container}>
            <p>Site desenvolvido por <a href='https://portfolio-luscabap.vercel.app/' target='_blank'>{autor}</a> | Todo os direitos reservados 2024 &copy;</p>
        </div>
    )
}