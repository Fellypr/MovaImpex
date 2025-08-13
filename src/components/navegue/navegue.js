import "./navegue.css";

export default function Navegue() {
    return (
        <div className="navegueMain">
            <h1 className="navegueTitle">Navegue</h1>
            <ul>
                <li><a href="/servicos">Home</a></li>
                <li><a href="/empresa">NossaEmpresa</a></li>
                <li><a href="/informacoes">Serviços</a></li>
                <li><a href="/informacoes">Informacões</a></li>
                <li><a href="/informacoes">Políticas de Privacidade</a></li>
                <li><a href="/informacoes">Contato</a></li>
            </ul>
        </div>
    );
}