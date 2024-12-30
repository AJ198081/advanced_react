
interface HeaderProps {
    userName: string;
}

export const Header = ({userName}: HeaderProps) => {

    return <>
        <header>
            <img src="/quiz-logo.png" className={"my-3"} alt="Quiz Logo"/>
            <h1>
                Math Quiz {userName && `for ${userName}`}
            </h1>
        </header>
    </>

}