

import wixData from 'wix-data';

$w.onReady(() => {
	$w('#dataset1').onReady(() => {
		count();

		$w('#gender , #skills , #location , #experience').onChange(() => {
			search();
		})
		$w('#clear').onClick(() => {
			$w('#gender , #skills , #location , #experience').value = "";
			$w('#dataset1').setFilter(wixData.filter())
				.then(count);
		});

		function search() {
			let filter = wixData.filter();
			let gender = $w("#gender").value;
			let food = $w("#skills").value;
			let occupation = $w("#location").value;
			let color = $w("#experience").value;

			if (gender && gender !== 'all') {
				filter = filter.eq("gender", gender);
			}
			if (food && food !== 'all') {
				filter = filter.eq("food", food);
			}
			if (occupation && occupation !== 'all') {
				filter = filter.eq("occupation", occupation);
			}
			if (color && color !== 'all') {
				filter = filter.eq("color", color);
			}
			$w('#dataset1').setFilter(filter)
				.then(count);
		}

		function count() {
			let total = $w('#dataset1').getTotalCount();
			if (total > 0) {
				$w('#textCount').text = `${total} result has found.`;
			} else {
				$w('#textCount').text = "No result found!";
			}
		}
	});
});
