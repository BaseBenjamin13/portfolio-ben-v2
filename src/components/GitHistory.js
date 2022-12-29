import React from 'react'
import { Heading, Stack, useColorModeValue as uCMV } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

function GitHistory() {
  return (
      <div className="git-history-container">

    <Stack paddingTop={20}>
        <Heading
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={30}
            marginY={5}>
            My GitHub History
        </Heading>
        {/* <GitHubCalendar username="basebenjamin13"/> */}
        <GitHubCalendar
            fontSize={25}
            blockSize={15}
            blockRadius={5}
            color={"#010D26"}
            
            // theme={{
            //         level0: uCMV("rgb(200,200,200)","rgb(44,44,44)"),
            //         level1: uCMV('goldenrod','rgb(107,91,47)'),
            //         level2: uCMV('rgb(176,145,66)','rgb(137,115,31)'),
            //         level3: uCMV('rgb(147,125,41)','rgb(166,135,56)'),
            //         level4: uCMV('rgb(117,101,57)','goldenrod') 
            //     }}
                username="basebenjamin13">
            {/* <ReactTooltip html /> */}
        </GitHubCalendar>
    </Stack>
    </div>
  )
}

export default GitHistory