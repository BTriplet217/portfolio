document.getElementById('dm-auth-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const password = document.getElementById('dm-password').value;

    // Verify DM password (for simplicity, hardcoding a password)
    if (password === 'dungeonmaster123') {
        document.getElementById('dm-authentication').style.display = 'none';
        document.getElementById('dm-campaigns').style.display = 'block';
    } else {
        alert('Invalid password');
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
