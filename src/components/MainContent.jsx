export default function MainContent() {
  return (
    <>
      <main className="main">
        <section className="main__form-section">
          <form action="" method="post" className="ingredients-form">
            <input 
              type="text" 
              placeholder="e.g. Fava Beans" 
              className="ingredients-form__input" 
              aria-label="Add ingredient" 
            />
            <button className="ingredients-form__btn">+ Add Ingrediant</button>
          </form>
        </section>
      </main>
    </>
  )
}