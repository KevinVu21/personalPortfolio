export default function aboutMe({isAboutShown}){
    return(
        <section id="about" className = {isAboutShown ? "flex" : "hidden"}>
            <h1>More about me</h1>
        </section>
    );
}