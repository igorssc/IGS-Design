import { maskPhone } from "@/utils/mask";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useBackdrop } from "../../hooks/useBackdrop";
import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { Select } from "../Select";
import { TextArea } from "../TextArea";
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
      name: nameValue.trim(),
      email: emailValue.trim().toLowerCase(),
      phone: phoneValue.trim(),
      subject: subjectValue,
      message: messageValue.trim(),
    };

    if (body.name.split(" ").length < 2) {
      handleClickSnackbarVariant(
        "Insira seu nome completo, por favor",
        "warning"
      );
      document.getElementById("form-name")?.focus();
      return;
    }
    if (
      !body.email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      handleClickSnackbarVariant(
        "Insira um e-mail válido, por favor",
        "warning"
      );
      document.getElementById("form-email")?.focus();
      return;
    }
    if (body.phone.length < 14) {
      handleClickSnackbarVariant(
        "Insira seu telefone completo, com DDD, por favor",
        "warning"
      );
      document.getElementById("form-phone")?.focus();
      return;
    }
    if (!body.subject) {
      handleClickSnackbarVariant("Selecione um assunto, por favor", "warning");
      document.getElementById("form-subject")?.focus();
      return;
    }
    if (body.message.length < 10) {
      handleClickSnackbarVariant(
        "Sua mensagem deve conter ao menos 10 caracteres",
        "warning"
      );
      document.getElementById("form-message")?.focus();
      return;
    }

    handleOpenBackdrop();

    try {
      const response = await fetch("/api/email/host", {
        method: "POST",
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (response.status === 200 && data.accepted) {
        const bodyTemporary = JSON.stringify(body);

        handleClickSnackbarVariant("Mensagem enviada com sucesso!", "success");
        setNameValue("");
        setEmailValue("");
        setPhoneValue("");
        setSubjectValue("");
        setMessageValue("");
        handleCloseBackdrop();

        await fetch("/api/email/client", {
          method: "POST",
          body: bodyTemporary,
        });
      } else {
        throw new Error();
      }
    } catch {
      handleClickSnackbarVariant("Erro ao enviar a mensagem", "error");
      handleCloseBackdrop();
    } finally {
    }
  };

  useEffect(() => {
    setPhoneValue((prev) => maskPhone(prev));
  }, [phoneValue]);

  return (
    <>
      <Container>
        <div className={styles.content}>
          <Title _as="h2">Fale conosco</Title>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              sendEmail();
            }}
          >
            <div>
              <Input
                title="Nome completo"
                value={nameValue}
                setValue={setNameValue}
                id="form-name"
              />
            </div>
            <div>
              <Input
                title="E-mail"
                value={emailValue}
                setValue={setEmailValue}
                id="form-email"
              />
            </div>
            <div>
              <Input
                title="Telefone"
                value={phoneValue}
                setValue={setPhoneValue}
                id="form-phone"
              />
            </div>
            <div>
              <Select
                title="Assunto"
                data={["Dúvidas", "Orçamentos", "Reclamações", "Sugestões"]}
                defaultValue={subjectValue}
                setValue={setSubjectValue}
                id="form-subject"
              />
            </div>
            <div>
              <TextArea
                title="Mensagem"
                value={messageValue}
                setValue={setMessageValue}
                id="form-message"
              />
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
