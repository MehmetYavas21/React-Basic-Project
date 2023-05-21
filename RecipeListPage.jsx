import { Center, Heading } from '@chakra-ui/react';
import { data } from '../utils/data';

export const RecipeListPage = () => {
  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
    </Center>
  );
};

// check this function
data.hits.forEach((item) => {
    console.log(item.recipe.label + " -- " +  item.recipe.dietLabels[0] + " -- " + item.recipe.cautions[0]) 
})

