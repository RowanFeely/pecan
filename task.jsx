const command = "zsh pecan/scripts/task";
const refreshFrequency = 10000; //ms

const render = ({ output }) => <div class='screen'><div class='pecantask'> {`${output}`}tasks</div></div>;

export { command, refreshFrequency, render };
