import roboticChef from "../assets/robotic-chef.png"

export default function Header() {
  return (
    <>
      <header className="header">
          <div className="header__brand">
            <img src={roboticChef} alt="robotic chef" className="header__img" />
            <span className="header__name">RoboChef</span>
          </div>
      </header>
    </>
  )
}