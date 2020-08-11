import React from 'react';

export default function List(){
	return(
		<div class="animated slideInUpTiny animation-duration-3">
			<div class="user-list d-flex flex-row  card-strip">
				<div class="MuiAvatar-root MuiAvatar-circle user-avatar avatar-shadow">
					<img alt="..." src="" class="MuiAvatar-img" />
				</div>
				<div class="description">
					<h3>Bangla 1st</h3>
					<h6 class="text-muted">bn-1</h6>
					<p>Mushfiqur Rahaman, Istiaque Ahmed</p>
					<ul class="list-inline d-sm-flex flex-sm-row jr-mbtn-list mb-0">
						<li>
							<button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button">
								<span class="MuiButton-label">Modify</span>
								<span class="MuiTouchRipple-root"></span>
							</button>
						</li>
						<li>
							<button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary" tabindex="0" type="button">
								<span class="MuiButton-label">Delete</span>
								<span class="MuiTouchRipple-root"></span>
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div class="user-list d-flex flex-row  card-strip">
				<div class="MuiAvatar-root MuiAvatar-circle user-avatar avatar-shadow">
					<img alt="..." class="MuiAvatar-img" />
				</div>
				<div class="description">
					<h3>English For Today</h3>
					<h6 class="text-muted">en-1</h6>
					<p>Ashikul Islam</p>
					<ul class="list-inline d-sm-flex flex-sm-row jr-mbtn-list mb-0">
						<li>
							<button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button">
								<span class="MuiButton-label">Modify</span>
								<span class="MuiTouchRipple-root"></span>
							</button>
						</li>
						<li>
							<button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary" tabindex="0" type="button">
							<span class="MuiButton-label">Delete</span>
							<span class="MuiTouchRipple-root"></span>
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
	)
}