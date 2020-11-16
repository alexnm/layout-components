import * as React from 'react'
import './styles.css'

import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Inline } from './components/layout/Inline'
import { Row } from './components/layout/Row'
import { Box } from './components/layout/Box'
import { Stack } from './components/layout/Stack'
import { Square } from './components/Square'
import { Grid } from './components/layout/Grid'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box padding={2}>
        <Stack gap={7}>
          <h1>Layout primitives</h1>
          <Row>
            <Stack gap={2}>
              <h2>Inline</h2>
              <Inline gap={2} wrap>
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
              </Inline>
            </Stack>
          </Row>

          <Stack gap={2}>
            <h2>Stack</h2>
            <Stack gap={2}>
              <Square />
              <Square />
              <Square />
            </Stack>
          </Stack>

          <Stack gap={2}>
            <h2>Inline & Stack</h2>

            <Inline gap={2} align="center">
              <Square />
              <Stack gap={1}>
                <p>Author</p>
                <p>Description</p>
              </Stack>
            </Inline>
          </Stack>

          <Stack gap={2}>
            <h2>Box</h2>

            <Box padding={2} withBorder>
              <Square />
            </Box>
          </Stack>

          <Row>
            <Box>
              <Stack gap={2}>
                <h2>Row</h2>

                <Row justify="space-between">
                  <span>Some text on the left</span>
                  <Square>Square on the right</Square>
                </Row>
              </Stack>
            </Box>
          </Row>

          <Row>
            <Box>
              <Stack gap={2}>
                <h2>Row & Box</h2>

                <Row>
                  <Box>
                    <Square />
                  </Box>
                  <Box>
                    This is a randome text This is another randome textThis is a
                    randome text This is another randome text
                  </Box>
                  <Box>
                    <Square />
                  </Box>
                </Row>
              </Stack>
            </Box>
          </Row>

          <Stack gap={2}>
            <h2>Grid</h2>

            <Grid columns="1fr 1fr 1fr" rowGap={4} columnGap={4}>
              <span>
                This is a randome text This is another randome textThis is a
                randome text This is another randome text
              </span>
              <Square size={6} />
              <Square size={6} />
              <span>
                This is a randome text This is another randome textThis is a
                randome text This is another randome text
              </span>
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}
