import { Callout } from 'nextra-theme-docs'

function Disclaimer() {
  return (
    <Callout type="warning" emoji="⚠️">
        <strong>Disclaimer:</strong> Work in progress. Subject to change. Information may not be current or accurate.
    </Callout>
  )
}

export default function MyApp() {
  return <Disclaimer />
}
