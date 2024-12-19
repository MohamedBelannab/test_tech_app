import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export function SignUp({ open, handleOpen }) {
  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography
              variant="h4"
              className="uppercase font-black font-poppins"
              color="blue-gray"
            >
              Inscription
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Créez un compte en remplissant les informations ci-dessous.
            </Typography>

            {/* Name input */}
            <Typography className="-mb-2" variant="h6">
              Votre Nom
            </Typography>
            <Input label="Nom" size="lg" />

            {/* Email input */}
            <Typography className="-mb-2" variant="h6">
              Votre E-mail
            </Typography>
            <Input label="E-mail" size="lg" />

            {/* Telephone input */}
            <Typography className="-mb-2" variant="h6">
              Votre Téléphone
            </Typography>
            <Input label="Téléphone" size="lg" />

            {/* Password input */}
            <Typography className="-mb-2" variant="h6">
              Votre Mot de passe
            </Typography>
            <Input label="Mot de passe" size="lg" />

            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Se souvenir de moi" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="green" variant="gradient" onClick={handleOpen} fullWidth>
              S'inscrire
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Vous avez déjà un compte ?
              <Typography
                as="a"
                href="#login"
                variant="small"
                color="green"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Connectez-vous
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
