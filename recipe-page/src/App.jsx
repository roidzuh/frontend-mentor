import styled from 'styled-components';

const Container = styled.main`
  background-color: #fff;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  img {
    border-radius: 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 736px;
    img {
      width: auto;
      margin: 40px 40px 0 40px;
      border-radius: 12px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 32px 32px 32px;

  hr {
    border: 1px solid #e3ddd7;
  }
  @media (min-width: 768px) {
    padding: 0 40px 40px 40px;
  }
`;

const Title = styled.div`
  h1 {
    font-family: 'Young Serif', serif;
    color: #312e2c;
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 24px;
  }

  p {
    line-height: 150%;
  }
`;

const Preparation = styled.div`
  background-color: #fff7fb;
  padding: 28px;
  border-radius: 12px;

  h3 {
    color: #7a284e;
    font-size: 20px;
    font-weight: semibold;
    margin-bottom: 16px;
  }

  ul {
    margin-left: 22px;
  }

  li::marker {
    color: #7a284e;
  }

  li {
    padding-left: 20px;
  }
`;

const Ingredients = styled.div`
  ul {
    margin-left: 24px;
  }

  li {
    padding-left: 18px;
  }
`;
const Instructions = styled.div`
  ol {
    margin-left: 24px;
  }

  li {
    padding-left: 18px;
  }

  li::marker {
    font-weight: bold;
  }
`;

const Nutrition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    margin-bottom: 0;
  }

  table,
  th,
  td {
    border-collapse: collapse;
  }

  td {
    padding: 12px 0;
  }

  td:first-child {
    padding-left: 32px;
  }

  td:last-child {
    padding-right: 32px;
  }

  tr:last-child td {
    padding-bottom: 0;
  }

  tr:first-child td {
    padding-top: 0;
  }

  tr {
    border-bottom: 2px solid #e3ddd7;
    padding: 32px;
  }

  tr:last-child {
    border-bottom: none;
  }
`;

export default function App() {
  return (
    <Container>
      <img src="image-omelette.jpeg" alt="food" />
      <Wrapper>
        <Title>
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </Title>
        <Preparation>
          <h3>Preparation time</h3>
          <ul>
            <li>
              <span>Total</span>: Approximately 10 minutes
            </li>
            <li>
              <span>Preparation</span>: 5 minutes
            </li>
            <li>
              <span>Cooking</span>: 5 minutes
            </li>
          </ul>
        </Preparation>
        <Ingredients>
          <h2>Ingredients</h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </Ingredients>
        <hr />
        <Instructions>
          <h2>Instructions</h2>
          <ol>
            <li>
              <span>Beat the eggs</span>: In a bowl, beat the eggs with a pinch
              of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <span>Heat the pan</span>: Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <span>Cook the omelette</span>: Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <span>Add fillings (optional)</span>: When the eggs begin to set
              at the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li>
              <span>Fold and serve</span>: As the omelette continues to cook,
              carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <span>Enjoy</span>: Serve hot, with additional salt and pepper if
              needed.
            </li>
          </ol>
        </Instructions>
        <hr />
        <Nutrition>
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>
                  <span>277kcal</span>
                </td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>
                  <span>0g</span>
                </td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>
                  <span>20g</span>
                </td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>
                  <span>22g</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Nutrition>
      </Wrapper>
    </Container>
  );
}
