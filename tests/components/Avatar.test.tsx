import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Avatar from "@/components/Avatar"

describe("Avatar", () => {
  it("renders the first letter of a plain name", () => {
    render(<Avatar name="carlos" />)
    expect(screen.getByText("C")).toBeTruthy()
  })

  it("renders first two uppercase letters for a PascalCase name", () => {
    render(<Avatar name="CarlosNava" />)
    expect(screen.getByText("CN")).toBeTruthy()
  })

  it("renders single letter when only one uppercase letter exists", () => {
    render(<Avatar name="John" />)
    expect(screen.getByText("J")).toBeTruthy()
  })
})
