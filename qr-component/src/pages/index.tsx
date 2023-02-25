import { Text, Container, Spacer, Card, Image } from '@nextui-org/react'

export default function Home() {
  return (
    <>
      <Container>
        <Card css={{ "bg": "$white", "mw": "400px" }}>
          <Spacer y={0.65} />

          <Image width={365} src="https://media.discordapp.net/attachments/1064122014744453120/1079142025779220542/image-qr-code.png" css={{ "marginLeft": "auto", "marginRight": "auto", "borderRadius": "10px" }} />
          
          <Spacer y={0.65} />

          <Text css={{ "color": "#20283D", "fontSize": "28px", "fontWeight": "700", "marginLeft": "auto", "marginRight": "auto" }}>Improve your front-end</Text>
          <Text css={{ "color": "#20283D", "fontSize": "28px", "fontWeight": "700", "marginLeft": "auto", "marginRight": "auto" }}>skills by building projects</Text>

          <Spacer y={0.2} />

          <Text css={{ "color": "#8A8990", "fontSize": "18px", "fontWeight": "400", "marginLeft": "auto", "marginRight": "auto" }}>Scan the QR code to visit Frontend</Text>
          <Text css={{ "color": "#8A8990", "fontSize": "18px", "fontWeight": "400", "marginLeft": "auto", "marginRight": "auto" }}>Mentor and take your coding skills to</Text>
          <Text css={{ "color": "#8A8990", "fontSize": "18px", "fontWeight": "400", "marginLeft": "auto", "marginRight": "auto" }}>the next level</Text>
          <Spacer y={2} />
        </Card>
      </Container>
    </>
  )
}
