import { AppBar, Box, Button, Grid, Typography } from "@mui/material";
import LinguaKoreaLogo from "../Components/LinguaKoreaLogo";

const navItems = ["Quiz"];

const HomePage = () => {
  return (
    <Box className='bg-[#19191C] w-[100vw] h-[100vh]'>
      <AppBar
        component="nav"
        className="bg-lingua-korea-blue h-auto static font-sans flex flex-row justify-evenly "
      >
        <Typography className="sm:ml-6">
          <LinguaKoreaLogo></LinguaKoreaLogo>
        </Typography>
        <Box className="mt-3 xs:ml-20 lg:ml-[1200px] hover:border-b-4 hover:border-lingua-korea-red">
          {navItems.map((item) => (
            <Button key={item} className="text-white">
              {item}
            </Button>
          ))}
        </Box>
      </AppBar>

      <Box className='flex justify-center items-center md:flex-row xs:flex-col xs:flex-col-reverse gap-48 mt-28'>

        <Box className='w-[500px]'>
          <h1 className="text-[#E4E4E7] text-4xl font-sans mb-6">Introducing LinguaKorea!</h1>
          <h3 className="text-[#E4E4E7] text-[4rem]font-sans mb-6">Dive into interactive lessons, vibrant cultural insights, and engaging exercises tailored to learners of all levels. </h3>
          <button className="bg-gradient-to-br from-red-300 to-lingua-korea-red text-white py-2 px-4 rounded-md shadow-md hover:from-red-800 hover:to-red-200 hover:shadow-lg">Take a Quiz</button>

        </Box>

        <Box className=''>
            <img
              className="rounded-[50%]"
              src="./KoreanImage.png"
              alt="Illustration Image"
            />
        </Box>

      </Box>
    </Box>
  );
};

export default HomePage;
