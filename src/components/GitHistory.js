import React from 'react'
import { Heading, Stack, useColorModeValue as uCMV } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import useMediaQuery from '@mui/material/useMediaQuery';


function GitHistory() {

    const matches = useMediaQuery('(max-width:600px)');

    return (
      <div className="git-history-container">

    <Stack paddingTop={20}>
        <Heading
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={30}
            marginY={5}>
            My GitHub History
        </Heading>

        <GitHubCalendar
            fontSize={matches ? 15 : 25}
            blockSize={15}
            blockRadius={5}
            color={"#38A169"}
            username="basebenjamin13">
        </GitHubCalendar>
        
    </Stack>
    </div>
  )
}

export default GitHistory