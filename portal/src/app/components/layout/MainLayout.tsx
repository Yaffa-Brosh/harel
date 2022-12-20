import {
  ContentDesign,
  LayoutDesign,
  MainLayoutDesign,
} from './MainLayout.style';
import { Body } from './body/Body';
export function MainLayout() {
  return (
    <MainLayoutDesign>
      <LayoutDesign>
        <ContentDesign>
          <Body />
        </ContentDesign>
      </LayoutDesign>
    </MainLayoutDesign>
  );
}
