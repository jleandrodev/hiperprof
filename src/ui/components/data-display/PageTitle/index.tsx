import { PageSubtitle, PageTitleContainer, PageTitleStyled } from "./style";

export interface PageTitlProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitlProps> = ({ title, subtitle }) => {
  return (
    <div>
      <PageTitleContainer>
        <PageTitleStyled color={"primary"}>{title}</PageTitleStyled>
        <PageSubtitle>{subtitle}</PageSubtitle>
      </PageTitleContainer>
    </div>
  );
};

export default PageTitle;
