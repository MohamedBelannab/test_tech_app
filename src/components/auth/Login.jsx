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

export function Login({ open, handleOpen }) {
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
            <Typography variant="h4" className="uppercase font-black  font-poppins" color="blue-gray">
              Connexion
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Entrez votre e-mail et mot de passe pour vous connecter.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Votre E-mail
            </Typography>
            <Input label="E-mail" size="lg" />
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
              Se connecter
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Vous n&apos;avez pas de compte ?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="green"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Inscrivez-vous
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
