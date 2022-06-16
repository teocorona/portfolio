

export const Skill = ({ text, logoSrc, styleSkill, styleSkillText }) => {
    return (
        <div className="col align-self-center col-md-4 col-12" style={styleSkillText}>
            <div className="m-3">
                <img src={logoSrc} alt={text} width={40} /> {text}
                <div className="progress m-2">
                    <div className="progress-bar" style={styleSkill} role="progressbar"></div>
                </div>
            </div>
        </div>
    )
}
