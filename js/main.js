$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getGIF(searchText);
    e.preventDefault();
  });
});

function getGIF(searchText){
  axios.get("https://api.giphy.com/v1/gifs/search?q="+searchText+"&api_key=e454a5fd3bf441bfba528d22db5ad54a&limit=40")
    .then((response) => {
      console.log(response);
	  let gifs= response.data.data;
	  let output='';
	  $.each(gifs, (index,gif)=>{
		  output += `
		    <div class="col-md-3">
                 <div class="well">
				<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/${gif.id}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
<br/>
<p><a href="https://media.giphy.com/media/${gif.id}/giphy.gif" download>Download GIF</a></p>
<p><a href="https://media.giphy.com/media/${gif.id}/giphy.mp4" download>Download MP4</a></p>

        </div>

			</div>
		  `;
	  });

	  $('#gifs').html(output);
	})
	.catch((err)=>{
		console.log(err);
	});
}
