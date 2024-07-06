import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ProjectModal({
  projectModal,
  setProjectModal,
  title,
  explanation,
  videoUrl,
  link,
}) {
  return (
    <Modal
      className="projectModal"
      show={projectModal}
      onHide={() => {
        setProjectModal(false);
      }}
    >
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="modalTitle">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBackground">
        <div class="embed-responsive embed-responsive">
          <iframe
            title="Apresentação Pessoal"
            id="videoDiv"
            src={videoUrl}
          ></iframe>
        </div>
        <p>{explanation}</p>
        <p>
          Para baixar no seu Windows e utilizar a aplicação, basta clicar no
          botão <span className="badge text-bg-primary">Baixar!</span> abaixo,
          descompactar o arquivo .zip e executar o arquivo .exe. Acima, há um
          breve vídeo explicando como baixar e utilizar a aplicação.
        </p>
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button
          variant="secondary"
          onClick={() => {
            setProjectModal(false);
          }}
        >
          Sair
        </Button>
        <Button
          variant="primary"
          href={link}
          target="_blank"
          onClick={() => {
            setProjectModal(false);
          }}
        >
          Baixar!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
