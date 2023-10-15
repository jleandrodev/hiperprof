import styles from "@styles/Home.module.css";
import PageTitle from "@ui/components/data-display/PageTitle";
import { TextField, Icon, Button } from "@mui/material";
import { BoxButton, HomeContainer } from "@styles/pages/index.styles";

export default function Home() {
  return (
    <HomeContainer>
      <PageTitle
        title="ENCONTRE O PROFESSOR IDEAL PARA VOCÊ!"
        subtitle="Pesquise pelo professor ideal para você"
      />
      <TextField
        sx={{ mt: 3, mb: 1 }}
        label={"Encontre um Professor"}
        InputProps={{
          startAdornment: <Icon>search</Icon>,
        }}
        fullWidth
        required
      />
      <BoxButton>
        <Button type="submit" variant="contained">
          Buscar o Professor Perfeito
        </Button>
      </BoxButton>
    </HomeContainer>
  );
}
