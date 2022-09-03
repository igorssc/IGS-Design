import { useSnackbar } from "notistack";
import { useState } from "react";
import { useBackdrop } from "../../hooks/useBackdrop";
import { Button } from "../Button";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./styles.module.scss";

export const FormContact = () => {
  const [nameValue, setNameValue] = useState<string>("");
  const [emailValue, setEmailValue] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState<string>("");
  const [subjectValue, setSubjectValue] = useState<string>("");
  const [messageValue, setMessageValue] = useState<string>("");

  const { handleOpen: handleOpenBackdrop, handleClose: handleCloseBackdrop } =
    useBackdrop();

  const { enqueueSnackbar } = useSnackbar();

  const handleClickSnackbarVariant = (
    message: string,
    variant: "success" | "error" | "warning" | "info" | "default"
  ) => enqueueSnackbar(message, { variant });

  const sendEmail = async () => {
    const body = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      subject: subjectValue,
      message: messageValue,
    };

    handleOpenBackdrop();

    await Promise.resolve(
      fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (response.status === 200) {
            handleClickSnackbarVariant(
              "Mensagem enviada com sucesso!",
              "success"
            );
            setNameValue("");
            setEmailValue("");
            setPhoneValue("");
            setSubjectValue("");
            setMessageValue("");
          } else {
            handleClickSnackbarVariant("Erro ao enviar a mensagem", "error");
          }
        })
        .catch(() =>
          handleClickSnackbarVariant("Erro ao enviar a mensagem", "error")
        )
    );

    handleCloseBackdrop();
  };

  return (
    <>
      <Container>
        <div className={styles.content}>
          <Title>Fale conosco</Title>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              sendEmail();
            }}
          >
            <div>
              <label htmlFor="name">Nome completo:</label>
              <input
                required
                type="text"
                id="name"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                required
                type="text"
                id="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone">Telefone:</label>
              <input
                required
                type="text"
                id="phone"
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="subject">Assunto:</label>
              <select
                id="subject"
                required
                value={subjectValue}
                onChange={(e) => setSubjectValue(e.target.value)}
              >
                <option value="" hidden>
                  Assunto *
                </option>
                <option value="Dúvidas">Dúvidas</option>
                <option value="Orçamentos">Orçamentos</option>
                <option value="Reclamações">Reclamações</option>
                <option value="Sugestões">Sugestões</option>
              </select>
            </div>
            <div>
              <label htmlFor="message">Mensagem:</label>
              <textarea
                required
                id="message"
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.button}>
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
