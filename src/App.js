import "./App.css";
import { MdSend, MdOutlineSportsSoccer } from "react-icons/md";
import ChatBox from "./components/ChatBox/ChatBox";
import { useState } from "react";
import axios from "axios";

const sendMessage = (prompt) => {
  const url = "https://legitimate-lorena-jlezama0-76edd24a.koyeb.app/Grammi";
  //return axios.get(url);
  return axios.post(url, { prompt });
};

function App() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const hasMessages = messages.length > 0;

  const handleOnChange = (event) => {
    setText(event.target.value);
    const target = event.target;
    target.style.height = "auto"; // Reinicia la altura
    target.style.height = target.scrollHeight + "px"; // Ajusta a contenido
  };

  const onClickSendButton = (e) => {
    e.preventDefault();
    e.preventDefault();
    // Enviar el string directamente en lugar de un objeto
    sendMessage(text).then((response) => {
      console.log(response);
      setMessages((currentMessage) => [
        ...currentMessage,
        { isReceiver: true, text: response.data.Grammi },
      ]);
    });
    // Agregar el mensaje enviado a la lista (si lo deseas)
    setMessages([...messages, { text }]);
    setText("");
  };

  return (
    <div className="app">
      <div className="sidebar">
        <div className="sidebar-header">
          <span className="sidebar-title">GramaSports</span>
          <MdOutlineSportsSoccer size={22} />
        </div>

        <div className="sidebar-menu">
          <details>
            <summary>Productos</summary>
            <ul>
              <li>Pelotas</li>
              <li>Camisetas</li>
              <li>Zapatillas</li>
            </ul>
          </details>

          <details>
            <summary>Paisajismos</summary>
            <ul>
              <li>GRAMA_GOLF_10MM</li>
              <li>GRAMA_MULTIPROPOSITO_TENIS_10MM</li>
              <li>GRAMA_MULTIPROPOSITO_TENIS_12MM</li>
              <li>MAXICESPED_10MM</li>
              <li>PAISAJISMO_15MM</li>
              <li>PAISAJISMO_20MM_COLORES</li>
              <li>PAISAJISMO_20MM_FOREST</li>
              <li>PAISAJISMO_20MM_JADE</li>
              <li>PAISAJISMO_30MM</li>
              <li>PAISAJISMO_20MM_JUNTER</li>
              <li>PAISAJISMO_35MM</li>
              <li>CATALOGO PAISAJISMOS</li>
            </ul>
          </details>

          <details>
            <summary>Jardines Verticales</summary>
            <ul>
              <li>LAUREL FLORES BLANCAS</li>
              <li>JV PINO BIG FLOWERS </li>
              <li>JV PINO JADE </li>
              <li>JV PINO NEON</li>
              <li>JV TREBOL FLORES BLANCAS</li>
              <li>JV TREBOL FLORES LILAS </li>
              <li>PRESENTACION JARDINES </li>
            </ul>
          </details>

          <details>
            <summary>Grama Futbol Padel</summary>
            <ul>
              <li>BREMEN_50MM_BICOLOR</li>
              <li>BREMEN_50MM_TIPOESTADIO</li>
              <li>DIAMOND_50MM</li>
              <li>FIBRILADA_50MM_AZUL</li>
              <li>FIBRILADA_50MM_LIMEGREEN</li>
              <li>FIBRILADA_50MM_TIPOESTADIO</li>
              <li>FIBRILADA_50MM_VERDE_ESMERALDA</li>
              <li>MILAN_50MM_BICOLOR</li>
              <li>MILAN_50MM_TIPOESTADIO</li>
              <li>PADEL_FASTPRO_TERRACOTA_12MM</li>
              <li>PADEL_FASTPRO_12MM</li>
              <li>PRIDE_50MM_BICOLOR 13000</li>
              <li>PRIDE_50MM_BICOLOR 14000</li>
              <li>PRIDE_60MM_TIPOESTADIO</li>
              <li>Brochure Padel</li>
            </ul>
          </details>

          <details>
            <summary>Insumos Instalacion</summary>
            <ul>
              <li>ARENA_SILICE</li>
              <li>CAUCHO GRANULADO</li>
              <li>CINTA_UNION15_30CM</li>
              <li>PEGANTE FLEXIBOND</li>
              <li>SHOCKPAD_10mm</li>
              <li>CINTA_UNION_15cm_30cm</li>
              <li>SHOCKPAD_20mm</li>
            </ul>
          </details>
        </div>
      </div>

      <main className={hasMessages && "main-botton"}>
        {!hasMessages && (
          <div className="info">
            <div className="info-title">
              <MdOutlineSportsSoccer size={22} />
              <h2>Hola,Soy Gramita</h2>
            </div>
            <div>
              <h3>¿Como te puedo ayudar hoy?</h3>
            </div>
          </div>
        )}

        <ChatBox messages={messages} />

        <div className="chat">
          <form onSubmit={onClickSendButton}>
            <textarea type="text" value={text} onChange={handleOnChange} />
            <button type="submit" className="chat-button">
              <MdSend size={22} />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
