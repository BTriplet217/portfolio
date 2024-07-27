document.getElementById('player-auth-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const accessCode = document.getElementById('campaign-code').value;

    // Verify access code (for simplicity, allowing any non-empty code)
    if (accessCode) {
        document.getElementById('player-authentication').style.display = 'none';
        document.getElementById('player-campaigns').style.display = 'block';
    } else {
        alert('Invalid access code');
    }
});

function addNewCampaign() {
    const campaignName = prompt('Enter the new campaign name:');
    if (campaignName) {
        const campaignList = document.getElementById('campaign-list');
        const campaignDiv = document.createElement('div');
        campaignDiv.innerText = campaignName;
        campaignList.appendChild(campaignDiv);
    }
}
